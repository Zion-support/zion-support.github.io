

class ErrorBoundary extends React.Component {
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
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}


import React from "react";
import SEO from "../components/SEO";
import { Check, ExternalLink } from "lucide-react";
;
  return (

                key={f}
                className="flex items - start space - x-3 p - 4 rounded - xl bg - white / 5 border border - white / 10";
              >;
                <Check className="w - 5 h - 5 text - cyan - 400 mt - 1" />;
                <p className="text - gray - 200">{f}</p>;
              </div>))}
          </div>;
          <div className="mt - 8 flex flex - wrap items - center gap - 4">;
            <a;
              href="/contact";
              className="px - 5 py - 3 rounded - lg bg - white text - black font - semibold hover: bg - gray - 200";
            >;
              Start from $199 / mo;
            </a>;
            <a;
              href="/pricing";
              className="px - 5 py - 3 rounded - lg border border - white / 20 text - white hover:bg - white / 10";
            >;
              Pricing;
            </a>;
            <a;
              href="https://developer.hashicorp.com / vault";
              target="_blank";
              rel="noreferrer";
              className="inline - flex items - center gap - 2 text - cyan - 400 hover:text - cyan - 300";
            >;
              <ExternalLink className="w - 4 h - 4" /> HashiCorp Vault Docs;
            </a>;
            <a;
              href="https://cloud.google.com / kms";
              target="_blank";
              rel="noreferrer";
              className="inline - flex items - center gap - 2 text - cyan - 400 hover:text - cyan - 300";
            >;
              <ExternalLink className="w - 4 h - 4" /> Google Cloud KMS;
            </a>;
          </div>;
        </section>;
      </main>;

}

