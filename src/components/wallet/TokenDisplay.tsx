const { wallet, loading } = useWallet();
  return (


    <Card>

      <CardHeader className="flex flex-row items-center justify-between pb-2">"

        <div>
</div>"
          <CardTitle className="text-xl">ZION$ Balance"
          <CardDescription>Your current token balance
        <BadgeDollarSign className="h-6 w-6 text-primary" />"

      
      <CardContent>
"
          <Skeleton className="h-12 w-28" />"
          <div className="flex flex-col gap-2">"
            <div className="flex items-end">"
              <span className="text-3xl font-bold">{wallet?.balance || 0}</span>""
              <span className="ml-1 text-muted-foreground">ZION$</span>"
            <p className="text-sm text-muted-foreground">"
</p>

            <div className="mt-2">"
              <Button variant="outline" size="sm">"

              
            </div>
    <Card>;
      <CardHeader className="flex flex-row items-center justify-between pb-2">;"

        <div>;
          <CardTitle className="text-xl">ZION$ Balance;"
          <CardDescription>Your current token balance;
        </div>;"
        <BadgeDollarSign className="h-6 w-6 text-primary" />;"

      ;
      <CardContent>;
          <Skeleton className="h-12 w-28" />;"
          <div className="flex flex-col gap-2">;"
            <div className="flex items-end">;"
              <span className="text-3xl font-bold">{wallet?.balance || 0}</span>;""
              <span className="ml-1 text-muted-foreground">ZION$</span>;"
            <p className="text-sm text-muted-foreground">;"
            </p>;"
            <div className='mt-2'>;
              <Button variant='outline' size='sm'>                View Wallet            <div className="mt-2">;"

      <CardHeader className='flex flex - row items - center justify - between pb - 2'>;

          <CardTitle className='text - xl'>ZION$ Balance;
          <CardDescription > Your current token balance;
        </div>;
        <BadgeDollarSign className='h - 6 w - 6 text - primary' />;

)
          <Skeleton className='h - 12 w - 28' />) : (

          <div className='flex flex - col gap - 2'>;
            <div className='flex items - end'>;
              <span className='text - 3xl font - bold'>{wallet?.balance || 0}</span>;
              <span className='ml - 1 text - muted - foreground'>ZION$</span>;
            <p className='text - sm text - muted - foreground'>;
            </p>;
            <div className='mt - 2'>;
              <Button variant='outline' size='sm'>                View Wallet            <div className="mt - 2">;"
              <Button variant="outline" size="sm">;"

            </div>;)"