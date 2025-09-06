  },
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.watchOptions = {
        ignored: [
    // Exclude apps directory from compilation
    config.module.rules.push({
      test: /\.(ts|tsx|js|jsx)$/
      include: /apps\//
      use: "ignore-loader"
    });
  async headers() {
    return [
      {
        source: "/(.*)"
        headers: [
          {
            key: "X-Content-Type-Options"
            value: "nosniff"
          }
          {
            key: "X-Frame-Options"
            value: "DENY"
          }
          {
            key: "X-XSS-Protection"
            value: "1; mode=block"
          }
          {
            key: "Referrer-Policy"
            value: "origin-when-cross-origin"
          }
        ]
      }
<<<<<<< HEAD
    ];
  }
}

<<<<<<< HEAD
export default nextConfig
=======
export default nextConfig;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
