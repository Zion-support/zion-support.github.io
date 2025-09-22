
  completed_at?: string;
  refunded_at?: string;
  cancelled_at?: string;
  provider?: {
}

  return (

                          ).toLocaleDateString()}
                        </span>;
                      </div>;
                    )}
                  </CardContent>;
                  <CardFooter className="flex justify-end gap-2 bg-zion-blue/20 pt-3">;
                    {canRelease && (;

                        size="sm";
                        className="bg-green-600 hover:bg-green-700 text-white";
                      >;
                        <CheckCircle2 className="mr-1 h-4 w-4" /> Release Funds;

                        size="sm";
                        variant="outline";
                        className="text-zion-slate-light border-zion-blue-light";
                      >;
                        <RefreshCcw className="mr-1 h-4 w-4" /> Request Refund;

                        size="sm";
                        variant="outline";
                        className="text-red-400 border-red-400/30 hover:bg-red-400/10";
                      >;
                        <XCircle className="mr-1 h-4 w-4" /> Cancel;
                      </Button>;
                    )}
                  </CardFooter>;
                </Card>;

          <div className="text-center py-12 border border-dashed border-zion-blue-light rounded-lg">;
            <div className="mx-auto w-16 h-16 bg-zion-blue-light/30 rounded-full flex items-center justify-center mb-4">;
              <ArrowRight className="h-8 w-8 text-zion-slate-light" />;
              <ArrowLeft className="h-8 w-8 text-zion-slate-light -ml-4" />;
            </div>;
            <h3 className="text-xl font-medium text-white mb-2">No transactions found</h3>;
            <p className="text-zion-slate-light max-w-md mx-auto">;
              {filter !== 'all' ;
                ? `You don't have any ${filter} transactions. Try changing the filter or make a new transaction.`;

            </p>;
          </div>;
        )}
      </div>;
    </div>;

}
