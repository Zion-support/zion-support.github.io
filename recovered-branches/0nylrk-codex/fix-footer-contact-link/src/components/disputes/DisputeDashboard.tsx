Card
  CardContent
  CardDescription
  CardHeader
  CardTitle



    refetch()
  }, [refetch]),

  const openDisputes = disputes.filter(d => d.status === 'open'),'
  const underReviewDisputes = disputes.filter(d => d.status === 'under_review'),'
  const resolvedDisputes = disputes.filter(d => d.status === 'resolved'),






        <Button onClick={refetch} variant="outline">
          Refresh;
        </Button>
      </div>




      <div className="grid gap-4 md:grid-cols-3">
        <Card>"
          <CardHeader className="pb-2">"
            <CardTitle className="text-lg font-medium flex justify-between items-center">
              <span>Open Disputes</span>"
              <span className="text-xl font-bold">{openDisputes.length}</span>
            </CardTitle>
            <CardDescription>Awaiting review</CardDescription>
          </CardHeader>

          <CardContent>

    <div className="container mx-auto p-4 space-y-6">;

      <div className="flex flex-wrap items-center justify-between gap-4">;
        <div>;"
          <h1 className="text-3xl font-bold">Dispute Resolution Center</h1>;


            </CardTitle>;
            <CardDescription>Awaiting review</CardDescription>;
          </CardHeader>;
          <CardContent>;



                width: `${Math.min(100, (openDisputes.length / Math.max(1, disputes.length)) * 100)}%` 
              }}></div>
            </div>
          </CardContent>
        </Card>


        <Card>

          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex justify-between items-center">
              <span>Under Review</span>
              <span className="text-xl font-bold">{underReviewDisputes.length}</span>              <span className="text-xl font-bold">{underReviewDisputes.length}</span>

            </CardTitle>
            <CardDescription>Being actively processed</CardDescription>
          </CardHeader>



        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex justify-between items-center">
              <span>Under Review</span>

              <span className="text-xl font-bold">
                {underReviewDisputes.length}
              </span>

            </CardTitle>
            <CardDescription>Being actively processed</CardDescription>
          </CardHeader>
          <CardContent>



                  width: `${Math && Math.min(100, (openDisputes && openDisputes.length / Math && Math.max(1, disputes && disputes.length)) * 100)}%`,
                }}></div>;
            </div>;
          </CardContent>;
        </Card>;



        <Card>;
          <CardHeader className="pb-2">;
            <CardTitle className="text-lg font-medium flex justify-between items-center">;
              <span>Under Review</span>;

              <span className="text-xl font-bold">;
                {underReviewDisputes && underReviewDisputes.length}
              </span>;

            </CardTitle>;
            <CardDescription>Being actively processed</CardDescription>;
          </CardHeader>;
          <CardContent>;



                width: `${Math.min(100, (underReviewDisputes.length / Math.max(1, disputes.length)) * 100)}%` 
              }}></div>
            </div>
          </CardContent>
        </Card>


        <Card>
          <CardHeader className="pb-2">

            <CardTitle className="text-lg font-medium flex justify-between items-center">
              <span>Resolved</span>

"
              <span className="text-xl font-bold">{resolvedDisputes.length}</span>



        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex justify-between items-center">
              <span>Resolved</span>

              <span className="text-xl font-bold">
                {resolvedDisputes.length}
              </span>

            </CardTitle>
            <CardDescription>Successfully concluded</CardDescription>
          </CardHeader>
          <CardContent>



            <div className={`w-full bg-green-100 rounded-full h-2.5 dark:bg-green-900/20`}>
              <div className="bg-green-500 h-2.5 rounded-full" style={{ 

                width: `${Math.min(100, (resolvedDisputes.length / Math.max(1, disputes.length)) * 100)}%` 
              }}></div>



            </div>
          </CardContent>
        </Card>
      </div>


      <DisputesList disputes={disputes} isLoading={isLoading} />
    </div>

              <span className="text-xl font-bold">{openDisputes.length}</span>;
            </CardTitle>;
            <CardDescription>Awaiting review</CardDescription>;
          </CardHeader>;

                width: `${Math.min(100, (openDisputes.length / Math.max(1, disputes.length)) * 100)}%`;
              }}></div>;
            </div>;
          </CardContent>;
        </Card>;

              <span className="text-xl font-bold">{underReviewDisputes.length}</span>;
            </CardTitle>;
            <CardDescription>Being actively processed</CardDescription>;
          </CardHeader>;

          <CardContent>;
            <div className={`w-full bg-yellow-100 rounded-full h-2.5 dark:bg-yellow-900/20`}>;
              <div className="bg-yellow-500 h-2.5 rounded-full" style={{;
                width: `${Math.min(100, (underReviewDisputes.length / Math.max(1, disputes.length)) * 100)}%`;
              }}></div>;

            </CardTitle>;
            <CardDescription>Successfully concluded</CardDescription>;
          </CardHeader>;
          <CardContent>;


            <div
              className={`w-full bg-green-100 rounded-full h-2 && 2.5 dark:bg-green-900/20`}>;
              <div
                className="bg-green-500 h-2 && 2.5 rounded-full"
                style={{



                  width: `${Math && Math.min(100, (resolvedDisputes && resolvedDisputes.length / Math && Math.max(1, disputes && disputes.length)) * 100)}%`,
                }}></div>;
import React, { useEffect } from './react';
import { use_disputes  } from '@/hooks / use_disputes';

import { DisputesList  } from './DisputesList';
import {}

  Card,
  CardContent,
  CardDescription,
  CardHeader,

              <span className="text - xl font - bold">{open_disputes.length}</span>;
            </CardTitle>;
            <CardDescription > Awaiting review</CardDescription>;
          </CardHeader>;
          <CardContent>;

                  width: `${Math.min (100, (open_disputes.length / Math.max (1, disputes.length)) * 100)}%`,
                }}
              ></div>;
            </div>;
          </CardContent>;
        </Card>;

              <span className="text - xl font - bold">;
                {underReviewDisputes.length}
              </span>;
            </CardTitle>;
            <CardDescription > Being actively processed</CardDescription>;
          </CardHeader>;
          <CardContent>;

                  width: `${Math.min (100, (underReviewDisputes.length / Math.max (1, disputes.length)) * 100)}%`,
                }}
              ></div>;
            </div>;
          </CardContent>;
        </Card>;

              <span className="text - xl font - bold">;
                {resolved_disputes.length}
              </span>;
            </CardTitle>;
            <CardDescription > Successfully concluded</CardDescription>;
          </CardHeader>;
          <CardContent>;

                  width: `${Math.min (100, (resolved_disputes.length / Math.max (1, disputes.length)) * 100)}%`,
                }}
              ></div>;



          </CardContent>;
        </Card>;
      </div>;


}

;





