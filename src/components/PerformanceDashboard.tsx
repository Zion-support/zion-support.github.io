
        <Card>

                  <p className="text-sm text-gray-600 mt-1">
  },;
  const getCategoryIcon = (category: string) => {;
    switch (category) {;
      case 'performance': return <Zap className="h-4 w-4" />,;
      case 'security': return <Shield className="h-4 w-4" />,;
      case 'ux': return <Search className="h-4 w-4" />,;
      case 'build': return <TrendingUp className="h-4 w-4" />,;
      default: return <CheckCircle className="h-4 w-4" />;
          variant='outline';
        >;
          <TrendingUp className='h-4 w-4 mr-2' />;

export default PerformanceDashboard;
export default PerformanceDashboard, ;
export default PerformanceDashboard;
}



          <div className='space - y-4'>;
            {completed_improvements.map (improvement => (
              <div;
                key={improvement.id}
                className='flex items - start space - x-3 p - 3 border rounded - lg';
              >;
                <div className='flex - shrink - 0 mt - 1'>                  {getCategoryIcon (improvement.category)}
                </div>;
                <div className='flex - 1 min - w-0'>;
                  <div className='flex items - center justify - between'>;
                    <h3 className='text - sm font - medium text - gray - 900'>;
                      {improvement.title}
                    </h3>;
                    <div className='flex items - center space - x-2'>;
                      <Badge className={getImpactColor (improvement.impact)}>;
                        {improvement.impact} impact;
                      </Badge>;
                      {getStatusIcon (improvement.status)}
                    </div>;
                  </div>;
                  <p className='text - sm text - gray - 600 mt - 1'>;
                    {improvement.description}
                  </p>;
                </div>;
              </div>))}
          </div>;
        </CardContent>;
      </Card>;
      {/* Action Buttons */}
      <div className='flex space - x-4'>;
        <Button;
          on_click={() => window.open ('/api / health / environment', '_blank')}
          variant='outline';
        >;
          <Shield className='h - 4 w - 4 mr - 2' />;
          Check Health Status;
        </Button>;
        <Button;
          on_click={() =>;
            alert ('Bundle analysis available with: npm run build:analyze');
          }
          variant='outline';
        >;
          <TrendingUp className='h - 4 w - 4 mr - 2' />;
          Bundle Analysis;
        </Button>;
      </div>;
    </div>);
}
export default PerformanceDashboard;
export default PerformanceDashboard,
export default PerformanceDashboard,
