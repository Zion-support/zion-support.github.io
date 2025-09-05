
import Marketplace from "@/pages/Marketplace";
import Categories from "@/pages/Categories";
import CategoryDetail from "@/pages/CategoryDetail";
import Featured from "@/pages/Featured";
import ListingDetail from "@/pages/ListingDetail";
import EquipmentPage from "@/pages/EquipmentPage";
import EquipmentDetail from "@/pages/EquipmentDetail";
import PostJob from "@/pages/PostJob";
import JobDetails from "@/pages/JobDetails";
import PublishProduct from "@/pages/PublishProduct";
import ServicesPage from "@/pages/ServicesPage";
import RequestQuote from "@/pages/RequestQuote";
import AIMatcher from "@/pages/AIMatcher";
import ServiceDescriptionGenerator from "@/pages/ServiceDescriptionGenerator";
import ITOnsiteServicesPage from "@/pages/ITOnsiteServicesPage";
import SearchPage from "@/pages/SearchPage";
import ProjectRoom from "@/pages/ProjectRoom";
import VideoCall from "@/pages/VideoCall";

const _MarketplaceRoutes = () => {_return (
    <Routes>
      {/* Marketplace Routes */}
      <Route path="/marketplace" element={_<Marketplace />} />
      <Route path="/categories" element={_<Categories />} />
      <Route path="/category/:slug" element={_<CategoryDetail />} />
      <Route path="/featured" element={_<Featured />} />
      <Route path="/marketplace/listing/:id" element={_<ListingDetail />} />
      <Route path="/listing/:id" element={_<ListingDetail />} />
      
      {_/* Equipment Routes */}
      <Route path="/equipment" element={_<EquipmentPage />} />
      <Route path="/equipment/:id" element={_<EquipmentDetail />} />
      
      {_/* Job Routes */}
      <Route
        path="/post-job" 
        element={_<ProtectedRoute>
            <PostJob />
          </ProtectedRoute>} 
      />
      <Route path="/jobs/:id" element={_<JobDetails />} />
      
      {_/* AI Matcher Routes */}
      <Route path="/ai-matcher" element={_<AIMatcher />} />
      <Route path="/match" element={_<AIMatcher />} />
      
      {_/* Creator Routes */}
      <Route 
        path="/publish" 
        element={_<ProtectedRoute>
            <PublishProduct />
          </ProtectedRoute>} 
      />
      
      {_/* Service Routes */}
      <Route path="/services" element={_<ServicesPage />} />
      <Route path="/it-onsite-services" element={_<ITOnsiteServicesPage />} />
      <Route path="/request-quote" element={_<RequestQuote />} />
      <Route path="/service-description-generator" element={_<ServiceDescriptionGenerator />} />
      
      {_/* Search Route */}
      <Route path="/search" element={_<SearchPage />} />
      
      {_/* Project Room Routes */}
      <Route 
        path="/project/:projectId" 
        element={_<ProtectedRoute>
            <ProjectRoom />
          </ProtectedRoute>} 
      />
      
      {_/* Video Call Routes */}
      <Route 
        path="/call/:roomId" 
        element={_<ProtectedRoute>
            <VideoCall />
          </ProtectedRoute>} 
      />
    </Routes>
  );
};

export default MarketplaceRoutes;
