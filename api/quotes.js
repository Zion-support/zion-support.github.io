
    const quote = {
      id: Date.now().toString(),
      name,
      email,
      phone,

    res.status(200).json({ 
      success: true,
      message: 'Quote request submitted successfully',
      quoteId: quote.id
    });
  } catch (error) {

