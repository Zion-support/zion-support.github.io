import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { FloatingCTA } from "./components/FloatingCTA";
import { PageLoader } from "./components/ui/PageLoader";
import { AuthRoutes, DashboardRoutes, MarketplaceRoutes, TalentRoutes, AdminRoutes, MobileAppRoutes, ContentRoutes, ErrorRoutes, EnterpriseRoutes, CommunityRoutes, DeveloperRoutes } from './routes';
// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const AIMatcherPage = React.lazy(() => import('./pages/AIMatcher'));
const TalentDirectory = React.lazy(() => import('./pages/TalentDirectory'));
const TalentsPage = React.lazy(() => import('./pages/TalentsPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const EquipmentPage = React.lazy(() => import('./pages/EquipmentPage'));
const EquipmentDetail = React.lazy(() => import('./pages/EquipmentDetail'));
const Analytics = React.lazy(() => import('./pages/Analytics'));
const MobileLaunchPage = React.lazy(() => import('./pages/MobileLaunchPage'));
const CommunityPage = React.lazy(() => import('./pages/CommunityPage'));
const Categories = React.lazy(() => import('./pages/Categories'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const PartnersPage = React.lazy(() => import('./pages/Partners'));
const Login = React.lazy(() => import('./pages/Login'));
const Signup = React.lazy(() => import('./pages/Signup'));
const ITOnsiteServicesPage = React.lazy(() => import('./pages/ITOnsiteServicesPage'));
const OpenAppRedirect = React.lazy(() => import('./pages/OpenAppRedirect'));
const ContactPage = React.lazy(() => import('./pages/Contact'));
const ZionHireAI = React.lazy(() => import('./pages/ZionHireAI'));
const RequestQuotePage = React.lazy(() => import('./pages/RequestQuote'));
const ExpandedServicesPage = React.lazy(() => import('./pages/ExpandedServicesPage'));
const ServiceComparisonPage = React.lazy(() => import('./pages/ServiceComparisonPage'));
const ServiceCalculatorPage = React.lazy(() => import('./pages/ServiceCalculatorPage'));
const AllServicesOverviewPage = React.lazy(() => import('./pages/AllServicesOverviewPage'));
const ServiceAnalyticsDashboard = React.lazy(() => import('./pages/ServiceAnalyticsDashboard'));
const ServiceMarketplace = React.lazy(() => import('./pages/ServiceMarketplace'));
const baseRoutes = [
    { path: '/', element: _jsx(Home, {}) },
    { path: '/match', element: _jsx(AIMatcherPage, {}) },
    { path: '/login', element: _jsx(Login, {}) },
    { path: '/signup', element: _jsx(Signup, {}) },
    { path: '/talent', element: _jsx(TalentDirectory, {}) },
    { path: '/talents', element: _jsx(TalentsPage, {}) },
    { path: '/services', element: _jsx(ServicesPage, {}) },
    { path: '/expanded-services', element: _jsx(ExpandedServicesPage, {}) },
    { path: '/all-services', element: _jsx(AllServicesOverviewPage, {}) },
    { path: '/service-comparison', element: _jsx(ServiceComparisonPage, {}) },
    { path: '/service-calculator', element: _jsx(ServiceCalculatorPage, {}) },
    { path: '/service-analytics', element: _jsx(ServiceAnalyticsDashboard, {}) },
    { path: '/service-marketplace', element: _jsx(ServiceMarketplace, {}) },
    { path: '/it-onsite-services', element: _jsx(ITOnsiteServicesPage, {}) },
    { path: '/categories', element: _jsx(Categories, {}) },
    { path: '/equipment', element: _jsx(EquipmentPage, {}) },
    { path: '/equipment/:id', element: _jsx(EquipmentDetail, {}) },
    { path: '/analytics', element: _jsx(Analytics, {}) },
    { path: '/mobile-launch', element: _jsx(MobileLaunchPage, {}) },
    { path: '/open-app', element: _jsx(OpenAppRedirect, {}) },
    { path: '/community', element: _jsx(CommunityPage, {}) },
    { path: '/contact', element: _jsx(ContactPage, {}) },
    { path: '/partners', element: _jsx(PartnersPage, {}) },
    { path: '/zion-hire-ai', element: _jsx(ZionHireAI, {}) },
    { path: '/hire-ai', element: _jsx(ZionHireAI, {}) },
    { path: '/request-quote', element: _jsx(RequestQuotePage, {}) },
    { path: '/blog', element: _jsx(Blog, {}) },
    { path: '/blog/:slug', element: _jsx(BlogPost, {}) },
];
// Enhanced loading component with better UX
function EnhancedSuspenseFallback() {
    return (_jsx(PageLoader, { text: "Loading Zion Tech Group...", className: "bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark" }));
}
// Error Boundary Component
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-background", children: _jsxs("div", { className: "text-center space-y-4", children: [_jsx("h1", { className: "text-2xl font-bold text-destructive", children: "Something went wrong" }), _jsx("p", { className: "text-muted-foreground", children: "We're sorry, but something unexpected happened. Please try refreshing the page." }), _jsx("button", { onClick: () => window.location.reload(), className: "px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90", children: "Refresh Page" })] }) }));
        }
        return this.props.children;
    }
}
const App = () => {
    return (_jsx("div", { className: "min-h-screen bg-zion-blue-dark text-white", children: _jsxs("div", { className: "container mx-auto px-4 py-8", children: [_jsx("h1", { className: "text-4xl font-bold text-center mb-8", children: "Zion Tech Group" }), _jsx("p", { className: "text-center text-xl", children: "Welcome to the enhanced Zion Tech Group application" }), _jsx("div", { className: "mt-8 text-center", children: _jsx("p", { className: "text-zion-cyan", children: "The application has been successfully enhanced with modern UI/UX improvements" }) })] }) }));
};
export default App;
