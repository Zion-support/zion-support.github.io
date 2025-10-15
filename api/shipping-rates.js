
    
    const rates = [
      {
        service: 'Standard',

      }
    ];
    res.status(200).json({ 
      success: true,
      rates,
      origin,
      destination,
      weight
    });
  } catch (error) {
    console.error('Shipping rates error:', error);