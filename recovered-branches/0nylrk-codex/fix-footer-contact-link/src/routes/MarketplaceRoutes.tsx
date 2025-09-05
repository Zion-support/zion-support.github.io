
<<<<<<< HEAD
<<<<<<< HEAD
import { Route, Routes } from "react-router-dom",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import Marketplace from "@/pages/Marketplace",
import Categories from "@/pages/Categories",
import CategoryDetail from "@/pages/CategoryDetail",
import Featured from "@/pages/Featured",
import ListingDetail from "@/pages/ListingDetail",
import EquipmentPage from "@/pages/EquipmentPage",
import EquipmentDetail from "@/pages/EquipmentDetail",
import PostJob from "@/pages/PostJob",
import JobDetails from "@/pages/JobDetails",
import PublishProduct from "@/pages/PublishProduct",
import ServicesPage from "@/pages/ServicesPage",
import RequestQuote from "@/pages/RequestQuote",
import AIMatcher from "@/pages/AIMatcher",
import ServiceDescriptionGenerator from "@/pages/ServiceDescriptionGenerator",
import ITOnsiteServicesPage from "@/pages/ITOnsiteServicesPage",
import SearchPage from "@/pages/SearchPage",
import ProjectRoom from "@/pages/ProjectRoom",
import VideoCall from "@/pages/VideoCall",
=======
import { Route, Routes } from &quot;react-router-dom&quot;;
import { ProtectedRoute } from &quot;@/components/ProtectedRoute&quot;;
import Marketplace from &quot;@/pages/Marketplace&quot;;
import Categories from &quot;@/pages/Categories&quot;;
import CategoryDetail from &quot;@/pages/CategoryDetail&quot;;
import Featured from &quot;@/pages/Featured&quot;;
import ListingDetail from &quot;@/pages/ListingDetail&quot;;
import EquipmentPage from &quot;@/pages/EquipmentPage&quot;;
import EquipmentDetail from &quot;@/pages/EquipmentDetail&quot;;
import PostJob from &quot;@/pages/PostJob&quot;;
import JobDetails from &quot;@/pages/JobDetails&quot;;
import PublishProduct from &quot;@/pages/PublishProduct&quot;;
import ServicesPage from &quot;@/pages/ServicesPage&quot;;
import RequestQuote from &quot;@/pages/RequestQuote&quot;;
import AIMatcher from &quot;@/pages/AIMatcher&quot;;
import ServiceDescriptionGenerator from &quot;@/pages/ServiceDescriptionGenerator&quot;;
import ITOnsiteServicesPage from &quot;@/pages/ITOnsiteServicesPage&quot;;
import SearchPage from &quot;@/pages/SearchPage&quot;;
import ProjectRoom from &quot;@/pages/ProjectRoom&quot;;
import VideoCall from &quot;@/pages/VideoCall&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
const MarketplaceRoutes = () => {
  return (
    <Routes>
      {/* Marketplace Routes */}
      <Route path=&quot;/marketplace&quot; element={<Marketplace />} />
      <Route path=&quot;/categories&quot; element={<Categories />} />
      <Route path=&quot;/category/:slug&quot; element={<CategoryDetail />} />
      <Route path=&quot;/featured&quot; element={<Featured />} />
      <Route path=&quot;/marketplace/listing/:id&quot; element={<ListingDetail />} />
      <Route path=&quot;/listing/:id&quot; element={<ListingDetail />} />
      
      {/* Equipment Routes */}
      <Route path=&quot;/equipment&quot; element={<EquipmentPage />} />
      <Route path=&quot;/equipment/:id&quot; element={<EquipmentDetail />} />
      
      {/* Job Routes */}
      <Route
        path=&quot;/post-job&quot; 
        element={
          <ProtectedRoute>
            <PostJob />
          </ProtectedRoute>
        } 
      />
      <Route path=&quot;/jobs/:id&quot; element={<JobDetails />} />
      
      {/* AI Matcher Routes */}
      <Route path=&quot;/ai-matcher&quot; element={<AIMatcher />} />
      <Route path=&quot;/match&quot; element={<AIMatcher />} />
      
      {/* Creator Routes */}
      <Route 
        path=&quot;/publish&quot; 
        element={
          <ProtectedRoute>
            <PublishProduct />
          </ProtectedRoute>
        } 
      />
      
      {/* Service Routes */}
      <Route path=&quot;/services&quot; element={<ServicesPage />} />
      <Route path=&quot;/it-onsite-services&quot; element={<ITOnsiteServicesPage />} />
      <Route path=&quot;/request-quote&quot; element={<RequestQuote />} />
      <Route path=&quot;/service-description-generator&quot; element={<ServiceDescriptionGenerator />} />
      
      {/* Search Route */}
      <Route path=&quot;/search&quot; element={<SearchPage />} />
      
      {/* Project Room Routes */}
      <Route 
        path=&quot;/project/:projectId&quot; 
        element={
          <ProtectedRoute>
            <ProjectRoom />
          </ProtectedRoute>
        } 
      />
      
      {/* Video Call Routes */}
      <Route 
        path=&quot;/call/:roomId&quot; 
        element={
          <ProtectedRoute>
            <VideoCall />
          </ProtectedRoute>
        } 
      />
    </Routes>
  )
},

export default MarketplaceRoutes,
=======
import { Route, Routes } from "react-router-dom",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
import Marketplace from "@/pages/Marketplace",;
import Categories from "@/pages/Categories",;
import CategoryDetail from "@/pages/CategoryDetail",;
import Featured from "@/pages/Featured",;
import ListingDetail from "@/pages/ListingDetail",;
import EquipmentPage from "@/pages/EquipmentPage",;
import EquipmentDetail from "@/pages/EquipmentDetail",;
import PostJob from "@/pages/PostJob",;
import JobDetails from "@/pages/JobDetails",;
import PublishProduct from "@/pages/PublishProduct",;
import ServicesPage from "@/pages/ServicesPage",;
import RequestQuote from "@/pages/RequestQuote",;
import AIMatcher from "@/pages/AIMatcher",;
import ServiceDescriptionGenerator from "@/pages/ServiceDescriptionGenerator",;
import ITOnsiteServicesPage from "@/pages/ITOnsiteServicesPage",;
import SearchPage from "@/pages/SearchPage",;
import ProjectRoom from "@/pages/ProjectRoom",;
import VideoCall from "@/pages/VideoCall",;
const MarketplaceRoutes = () => {;
  return (;
    <Routes>;
      {/* Marketplace Routes */}
      <Route path="/marketplace" element={<Marketplace />} />;
      <Route path="/categories" element={<Categories />} />;
      <Route path="/category/:slug" element={<CategoryDetail />} />;
      <Route path="/featured" element={<Featured />} />;
      <Route path="/marketplace/listing/:id" element={<ListingDetail />} />;
      <Route path="/listing/:id" element={<ListingDetail />} />;
      {/* Equipment Routes */}
      <Route path="/equipment" element={<EquipmentPage />} />;
      <Route path="/equipment/:id" element={<EquipmentDetail />} />;
      {/* Job Routes */}
      <Route;
        path="/post-job";
        element={;
          <ProtectedRoute>;
            <PostJob />;
          </ProtectedRoute>;
        } ;
      />;
      <Route path="/jobs/:id" element={<JobDetails />} />;
      {/* AI Matcher Routes */}
      <Route path="/ai-matcher" element={<AIMatcher />} />;
      <Route path="/match" element={<AIMatcher />} />;
      {/* Creator Routes */}
      <Route;
        path="/publish";
        element={;
          <ProtectedRoute>;
            <PublishProduct />;
          </ProtectedRoute>;
        } ;
      />;
      {/* Service Routes */}
      <Route path="/services" element={<ServicesPage />} />;
      <Route path="/it-onsite-services" element={<ITOnsiteServicesPage />} />;
      <Route path="/request-quote" element={<RequestQuote />} />;
      <Route path="/service-description-generator" element={<ServiceDescriptionGenerator />} />;
      {/* Search Route */}
      <Route path="/search" element={<SearchPage />} />;
      {/* Project Room Routes */}
      <Route;
        path="/project/:projectId";
        element={;
          <ProtectedRoute>;
            <ProjectRoom />;
          </ProtectedRoute>;
        } ;
      />;
      {/* Video Call Routes */}
      <Route;
        path="/call/:roomId";
        element={;
          <ProtectedRoute>;
            <VideoCall />;
          </ProtectedRoute>;
        } ;
      />;
    </Routes>;
  );
},;
export default MarketplaceRoutes;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
