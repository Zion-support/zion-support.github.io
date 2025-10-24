
const withErrorLogging = $2;
    const paymentIntent = {
      status: 'requires_payment_method',
    amount: amount
      currenc,
  y: currency}
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(paymentIntent))
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Payment intent creation error:', error)
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Failed to create payment intent' }))
  }
})