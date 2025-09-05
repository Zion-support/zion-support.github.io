
import React, {_useEffect} from "react";

export function DisputeDashboard() {_const { disputes, _isLoading, _refetch} = useDisputes();

  useEffect__(() => {_refetch();}, [refetch]);

  const _openDisputes = disputes.filter(d => d.status === 'open');
  const _underReviewDisputes = disputes.filter(d => d.status === 'under_review');
  const _resolvedDisputes = disputes.filter(d => d.status === 'resolved');

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Dispute Resolution Center</h1>
          <p className="text-muted-foreground">Manage and resolve disputes between clients and talents</p>
        </div>
        
        <Button onClick={_refetch} variant="outline">
          Refresh
        </Button>
      </div>
      
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex justify-between items-center">
              <span>Open Disputes</span>
              <span className="text-xl font-bold">{_openDisputes.length}</span>
            </CardTitle>
            <CardDescription>Awaiting review</CardDescription>
          </CardHeader>
          <CardContent>
            <div className={_`w-full bg-red-100 rounded-full h-2.5 dark:bg-red-900/20`}>
              <div className="bg-red-600 h-2.5 rounded-full" style={_{ 
                width: `${Math.min(100, _(openDisputes.length / Math.max(1, _disputes.length)) * 100)}%` 
              }}></div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex justify-between items-center">
              <span>Under Review</span>
              <span className="text-xl font-bold">{_underReviewDisputes.length}</span>
            </CardTitle>
            <CardDescription>Being actively processed</CardDescription>
          </CardHeader>
          <CardContent>
            <div className={_`w-full bg-yellow-100 rounded-full h-2.5 dark:bg-yellow-900/20`}>
              <div className="bg-yellow-500 h-2.5 rounded-full" style={_{ 
                width: `${Math.min(100, _(underReviewDisputes.length / Math.max(1, _disputes.length)) * 100)}%` 
              }}></div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex justify-between items-center">
              <span>Resolved</span>
              <span className="text-xl font-bold">{_resolvedDisputes.length}</span>
            </CardTitle>
            <CardDescription>Successfully concluded</CardDescription>
          </CardHeader>
          <CardContent>
            <div className={_`w-full bg-green-100 rounded-full h-2.5 dark:bg-green-900/20`}>
              <div className="bg-green-500 h-2.5 rounded-full" style={_{ 
                width: `${Math.min(100, _(resolvedDisputes.length / Math.max(1, _disputes.length)) * 100)}%` 
              }}></div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <DisputesList disputes={_disputes} isLoading={_isLoading} />
    </div>
  );
}
