<<<<<<< HEAD
      
<<<<<<< HEAD
          provider:profiles!provider_id(display_name);
<<<<<<< HEAD
      query = query.order('created_at', { ascending: false }),
      
<<<<<<< HEAD
  
<<<<<<< HEAD
  }, 

<<<<<<< HEAD

<<<<<<< HEAD
              const isClient = user?.id === transaction.user_id;
              const isPending =
                transaction.status === 'pending' || transaction.status === 'in_escrow';
              const isInEscrow = transaction.in_escrow;
              const canRelease = !isClient && isPending && isInEscrow;
              const canCancel = isClient && isPending;
              const canRefund = isClient && transaction.status === 'released';
              
              const counterpartyName = isClient 
                ? transaction.provider?.display_name || 'Service Provider' 
                : 'Client';

