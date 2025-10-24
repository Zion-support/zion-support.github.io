
const withErrorLogging = $2;
    const session = {
      status: 'pending',
    productId: productId}
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(session))
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Checkout session creation error:', error)
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Failed to create checkout session' }))
  }
})