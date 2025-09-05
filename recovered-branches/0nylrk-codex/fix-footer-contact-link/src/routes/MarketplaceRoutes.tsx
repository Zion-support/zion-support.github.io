
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
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      {_/* Job Routes */}
      <Route
<<<<<<< HEAD
        path=&quot;/post-job&quot; 
        element={
          <ProtectedRoute>
=======
        path="/post-job" 
        element={_<ProtectedRoute>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <PostJob />
          </ProtectedRoute>} 
      />
<<<<<<< HEAD
      <Route path=&quot;/jobs/:id&quot; element={<JobDetails />} />
      
      {/* AI Matcher Routes */}
      <Route path=&quot;/ai-matcher&quot; element={<AIMatcher />} />
      <Route path=&quot;/match&quot; element={<AIMatcher />} />
=======
      <Route path="/jobs/:id" element={_<JobDetails />} />
      
      {_/* AI Matcher Routes */}
      <Route path="/ai-matcher" element={_<AIMatcher />} />
      <Route path="/match" element={_<AIMatcher />} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      {_/* Creator Routes */}
      <Route 
<<<<<<< HEAD
        path=&quot;/publish&quot; 
        element={
          <ProtectedRoute>
=======
        path="/publish" 
        element={_<ProtectedRoute>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <PublishProduct />
          </ProtectedRoute>} 
      />
      
<<<<<<< HEAD
      {/* Service Routes */}
      <Route path=&quot;/services&quot; element={<ServicesPage />} />
      <Route path=&quot;/it-onsite-services&quot; element={<ITOnsiteServicesPage />} />
      <Route path=&quot;/request-quote&quot; element={<RequestQuote />} />
      <Route path=&quot;/service-description-generator&quot; element={<ServiceDescriptionGenerator />} />
      
      {/* Search Route */}
      <Route path=&quot;/search&quot; element={<SearchPage />} />
=======
      {_/* Service Routes */}
      <Route path="/services" element={_<ServicesPage />} />
      <Route path="/it-onsite-services" element={_<ITOnsiteServicesPage />} />
      <Route path="/request-quote" element={_<RequestQuote />} />
      <Route path="/service-description-generator" element={_<ServiceDescriptionGenerator />} />
      
      {_/* Search Route */}
      <Route path="/search" element={_<SearchPage />} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      {_/* Project Room Routes */}
      <Route 
<<<<<<< HEAD
        path=&quot;/project/:projectId&quot; 
        element={
          <ProtectedRoute>
=======
        path="/project/:projectId" 
        element={_<ProtectedRoute>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <ProjectRoom />
          </ProtectedRoute>} 
      />
      
      {_/* Video Call Routes */}
      <Route 
<<<<<<< HEAD
        path=&quot;/call/:roomId&quot; 
        element={
          <ProtectedRoute>
=======
        path="/call/:roomId" 
        element={_<ProtectedRoute>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <VideoCall />
          </ProtectedRoute>} 
      />
    </Routes>
  )
},

export default MarketplaceRoutes,
