


export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Ai Copilots
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with our advanced ai copilots solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
              Get Started
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
            <Link href="/services" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-600 transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Plan({
  name,
  price,
  features,
}: {
  name: string;
  price: string;
  features: string[];
}) {
  return (
    <div
      style={{
        border: "2px solid #e5e7eb",
        borderRadius: 12,
        padding: 20,
        backgroundColor: "#ffffff",
        position: "relative",
      }}
    >
      <h4
        style={{
          fontWeight: 700,
          fontSize: 18,
          color: "#1f2937",
          marginBottom: 8,
        }}
      >
        {name}
      </h4>
      <div
        style={{
          color: "#111827",
          fontWeight: 800,
          fontSize: 24,
          marginBottom: 16,
        }}
      >
        {price}
      </div>
      <ul style={{ paddingLeft: 18, color: "#4b5563", marginBottom: 20 }}>
        {features.map((f) => (
          <li key={f} style={{ listStyle: "disc", marginBottom: 6 }}>
            {f}
          </li>
        ))}
      </ul>
      <a
        href="mailto:kleber@ziontechgroup.com?subject=AI Copilot Services Inquiry"
        style={{
          display: "inline-block",
          width: "100%",
          textAlign: "center",
          padding: "12px 16px",
          backgroundColor: "#3b82f6",
          color: "white",
          textDecoration: "none",
          borderRadius: 8,
          fontWeight: 600,
        }}
      >
        Get Started
      </a>
    </div>
  );
}
