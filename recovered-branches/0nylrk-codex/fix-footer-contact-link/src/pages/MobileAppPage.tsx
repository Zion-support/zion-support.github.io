import React from "react",
import {AppLayout} from "@/layout/AppLayout",
import {SEO} from "@/components/SEO",
import {MobileAppHero} from "@/components/mobile-app/MobileAppHero",
import {AppFeatures} from "@/components/mobile-app/AppFeatures",
import {AppScreenshots} from "@/components/mobile-app/AppScreenshots",
import {AppTestimonials} from "@/components/mobile-app/AppTestimonials",
import {AppStoreBanner} from "@/components/mobile-app/AppStoreBanner",
import {DownloadSection} from "@/components/mobile-app/DownloadSection",
import React from "react",;
import { AppLayout } from "@/layout/AppLayout",;
import { SEO } from "@/components/SEO",;
import { MobileAppHero } from "@/components/mobile-app/MobileAppHero",;
import { AppFeatures } from "@/components/mobile-app/AppFeatures",;
import { AppScreenshots } from "@/components/mobile-app/AppScreenshots",;
import { AppTestimonials } from "@/components/mobile-app/AppTestimonials",;
import { AppStoreBanner } from "@/components/mobile-app/AppStoreBanner",;
import { DownloadSection } from "@/components/mobile-app/DownloadSection",;

,
class ErrorBoundary extends React.Component {,
  constructor(props) {,
    super(props),
    this.state = { hasError: false ,};
  }
,
  static getDerivedStateFromError(error) {,
    return { hasError: true ,};
  }
,
  componentDidCatch(error, errorInfo) {,
    console.error('Error caught by boundary:', error, errorInfo),
  }
,
  render() {,
    if (this.state.hasError) {,
      return <div>Something went wrong.</div>,
    }
,
    return this.props.children,
  }
}
,
,
const MobileAppPage: React.FC = () => {,
  return (,
    <AppLayout>,
,
      <SEO,
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982,
        title="Zion AI Marketplace App",
        description="Hire top AI talent or find global IT jobs on the go. Download the Zion app now.",
        keywords="AI freelancer app, hire tech, find IT jobs, tech marketplace app, mobile AI jobs",
      />,
      <MobileAppHero />,
      <AppFeatures />,
      <AppScreenshots />,
      <AppTestimonials />,
      <DownloadSection />,
      <AppStoreBanner />,
    </AppLayout>,
  ),
export default MobileAppPage,;
const MobileAppPage: React.FC = () => {,
  return (,
,
    <AppLayout>,
      <SEO,
        title="Zion AI Marketplace App",
        description="Hire top AI talent or find global IT jobs on the go. Download the Zion app now.",
        keywords="AI freelancer app, hire tech, find IT jobs, tech marketplace app, mobile AI jobs",
      />,
      <MobileAppHero />,
      <AppFeatures />,
      <AppScreenshots />,
      <AppTestimonials />,
      <DownloadSection />,
      <AppStoreBanner />,
,
    </AppLayout>),
}
,
,
export default MobileAppPage,
,
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982,
>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming)),
}