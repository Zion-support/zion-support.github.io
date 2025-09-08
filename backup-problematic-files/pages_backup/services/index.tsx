  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

    {;

      features: ["Custom dashboards", "Predictive modeling", "Automated alerts", "Multi-platform integration"],;
      pricing: "Starting at $299/month",;
      link: "/services/ai-analytics-dashboard";
    },;
    {;

      features: ["OCR technology", "Document classification", "Data extraction", "API integration"],;
      pricing: "Starting at $199/month",;
      link: "/services/smart-document-processor";
    },;
    {;

      features: ["Journey mapping", "Sentiment analysis", "A/B testing", "ROI tracking"],;
      pricing: "Starting at $399/month",;
      link: "/services/customer-experience-optimizer";
    },;
    {;

      features: ["Content generation", "Optimal timing", "Engagement tracking", "Multi-platform support"],;
      pricing: "Starting at $149/month",;
      link: "/services/automated-social-media-manager";
    },;
    {;

      features: ["Demand forecasting", "Automated reordering", "Cost optimization", "Multi-location support"],;
      pricing: "Starting at $249/month",;
      link: "/services/intelligent-inventory-manager";


                </ul>;
                <div className="flex justify-between items-center">;
                  <span className="text-lg font-semibold text-green-600">{service && service.pricing}</span>;
                  <Link href={service && service.link} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors">;
                    Learn More;
                  </Link>;
                </div>;
              </div>;
            ))}
          </div>;
        </section>;
