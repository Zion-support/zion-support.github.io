const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error("API Error:", error);
      res.status(500).json({
        error: "Internal server error",
        message: error.message,
      });
    }
  };
};

export default withErrorLogging(async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      priceId,
      quantity = 1,
      successUrl,
      cancelUrl,
      customerEmail,
    } = req.body;

    if (!priceId) {
      return res.status(400).json({ error: "Price ID is required" });
    }

    // Mock checkout session creation
    // In a real implementation, you would use Stripe or another payment processor
    const checkoutSession = {
      id: `cs_${Date.now()}`,
      url: `https://checkout.example.com/session/${Date.now()}`,
      payment_status: "unpaid",
      amount_total: 10000, // $100.00 in cents
      currency: "usd",
      customer_email: customerEmail || null,
      success_url: successUrl || `${req.headers.origin}/success`,
      cancel_url: cancelUrl || `${req.headers.origin}/cancel`,
    };

    res.status(200).json({
      checkoutSession,
    });
  } catch (error) {
    console.error("Checkout session creation error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
