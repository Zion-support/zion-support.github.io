


        shipping_address: details?.address}),

      const sessionId = data.sessionId as string | undefined;
  const shipping = hasPhysicalItems && subtotal <= 100 ? 15 : 0;
  const total = subtotal + tax + shipping;

