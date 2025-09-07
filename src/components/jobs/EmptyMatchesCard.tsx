export function EmptyMatchesCard(): any ({;
  onRefresh,;
  isProcessing,;)
}: EmptyMatchesCardProps) {;
  return (

    <Card className="p-6 text-center border-dashed border-2 bg-muted/30">"
"
      <div className="mb-4 flex justify-center">"
</div>"
        <Sparkles className="h-12 w-12 text-muted-foreground" />"

      <h3 className="text-lg font-medium mb-2">No talent matches yet</h3>""
      <p className="text-muted-foreground mb-6">"
</p>
      <Button;
        onClick={onRefresh} 
        disabled={isProcessing}


        className="mx-auto""
      >

          <>

            <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />"

          </>)
        ) : (



}

            <Sparkles className="mr-2 h-4 w-4" />"

        )}

      ;
    ;"
    <Card className='p - 6 text - center border - dashed border - 2 bg - muted / 30'>;

      <div className='mb - 4 flex justify - center'>;
</div>
        <Sparkles className='h - 12 w - 12 text - muted - foreground' />;

      </div>;
      <h3 className='text - lg font - medium mb - 2'>No talent matches yet</h3>;
      <p className='text - muted - foreground mb - 6'>;
      </p>;
      <Button on_click={on_refresh} disabled={is_processing} className='mx - auto'>      <Button;

          <>;
            <RefreshCcw className='mr - 2 h - 4 w - 4 animate - spin' />            Processing...;

          </>) : (
            <Sparkles className='mr - 2 h - 4 w - 4' />            Find AI Matches            <RefreshCcw className="mr - 2 h - 4 w - 4 animate - spin" />;"
)
          <>;"
            <Sparkles className='mr - 2 h - 4 w - 4' />            <Sparkles className="mr - 2 h - 4 w - 4" />;"
          </>)}
    );"