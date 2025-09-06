
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {Route, Routes} from "react-router-dom";
import {ProtectedRoute} from "@/components/ProtectedRoute";
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
import ProjectRoom from "@/pages/ProjectRoom";
import VideoCall from "@/pages/VideoCall";

=======
import ProjectRoom from "@/pages/ProjectRoom",
import VideoCall from "@/pages/VideoCall",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const MarketplaceRoutes = () => {
  return (
    <Routes>
      {/* Marketplace Routes */}
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/category/:slug" element={<CategoryDetail />} />
      <Route path="/featured" element={<Featured />} />
      <Route path="/marketplace/listing/:id" element={<ListingDetail />} />
      <Route path="/listing/:id" element={<ListingDetail />} />
      {/* Equipment Routes */}
      <Route path="/equipment" element={<EquipmentPage />} />
      <Route path="/equipment/:id" element={<EquipmentDetail />} />
      {/* Job Routes */}
      <Route
        path="/post-job"
        element={
          <ProtectedRoute>
            <PostJob />
          </ProtectedRoute>
        }
      />
      <Route path="/jobs/:id" element={<JobDetails />} />
      {/* AI Matcher Routes */}
      <Route path="/ai-matcher" element={<AIMatcher />} />
      <Route path="/match" element={<AIMatcher />} />
      {/* Creator Routes */}
      <Route
        path="/publish"
        element={
          <ProtectedRoute>
            <PublishProduct />
          </ProtectedRoute>
        }
      />
      {/* Service Routes */}
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/it-onsite-services" element={<ITOnsiteServicesPage />} />
      <Route path="/request-quote" element={<RequestQuote />} />
      <Route path="/service-description-generator" element={<ServiceDescriptionGenerator />} />
      {/* Search Route */}
      <Route path="/search" element={<SearchPage />} />
      {/* Project Room Routes */}
      <Route
        path="/project/:projectId"
        element={
          <ProtectedRoute>
            <ProjectRoom />
          </ProtectedRoute>
        }
      />
      {/* Video Call Routes */}
      <Route
        path="/call/:roomId"
        element={
          <ProtectedRoute>
            <VideoCall />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
<<<<<<< HEAD
}
export default MarketplaceRoutes;

=======
},

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default MarketplaceRoutes,
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
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
const MarketplaceRoutes = () => {
=======
const MarketplaceRoutes = () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <Routes>;
      {/* Marketplace Routes */}

>>>>>>> main
      <Route path="/marketplace" element={<Marketplace />} />;
      <Route path="/categories" element={<Categories />} />;
      <Route path="/category/:slug" element={<CategoryDetail />} />;
      <Route path="/featured" element={<Featured />} />;
      <Route path="/marketplace/listing/:id" element={<ListingDetail />} />;
      <Route path="/listing/:id" element={<ListingDetail />} />;
<<<<<<< HEAD
      {/* Equipment Routes */}
      <Route path="/equipment" element={<EquipmentPage />} />;
      <Route path="/equipment/:id" element={<EquipmentDetail />} />;
      {/* Job Routes */}
      <Route;
        path="/post-job";
        element={;
=======

      {/* Equipment Routes */}
      <Route path="/equipment" element={<EquipmentPage />} />;
      <Route path="/equipment/:id" element={<EquipmentDetail />} />;


      {/* Job Routes */}
      <Route
        path="/post-job"
        element={

>>>>>>> main
          <ProtectedRoute>;
            <PostJob />;
          </ProtectedRoute>;
        } ;
      />;
      <Route path="/jobs/:id" element={<JobDetails />} />;
<<<<<<< HEAD
      {/* AI Matcher Routes */}
      <Route path="/ai-matcher" element={<AIMatcher />} />;
      <Route path="/match" element={<AIMatcher />} />;
      {/* Creator Routes */}
      <Route;
        path="/publish";
        element={;
=======

      {/* AI Matcher Routes */}
      <Route path="/ai-matcher" element={<AIMatcher />} />;
      <Route path="/match" element={<AIMatcher />} />;

      {/* Creator Routes */}
      <Route
        path="/publish" 
        element={
>>>>>>> main
          <ProtectedRoute>;
            <PublishProduct />;
          </ProtectedRoute>;
        } ;
      />;
<<<<<<< HEAD
=======

>>>>>>> main
      {/* Service Routes */}
      <Route path="/services" element={<ServicesPage />} />;
      <Route path="/it-onsite-services" element={<ITOnsiteServicesPage />} />;
      <Route path="/request-quote" element={<RequestQuote />} />;
      <Route path="/service-description-generator" element={<ServiceDescriptionGenerator />} />;
<<<<<<< HEAD
      {/* Search Route */}
      <Route path="/search" element={<SearchPage />} />;
      {/* Project Room Routes */}
      <Route;
        path="/project/:projectId";
        element={;
=======

      {/* Search Route */}
      <Route path="/search" element={<SearchPage />} />;

      {/* Project Room Routes */}
      <Route
        path="/project/:projectId" 
        element={
>>>>>>> main
          <ProtectedRoute>;
            <ProjectRoom />;
          </ProtectedRoute>;
        } ;
      />;
<<<<<<< HEAD
      {/* Video Call Routes */}
      <Route;
        path="/call/:roomId";
        element={;
=======

      {/* Video Call Routes */}
      <Route
        path="/call/:roomId" 
        element={
>>>>>>> main
          <ProtectedRoute>;
            <VideoCall />;
          </ProtectedRoute>;
        } ;
      />;
    </Routes>;
  );
<<<<<<< HEAD
},;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default MarketplaceRoutes;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
};


=======

},


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default MarketplaceRoutes;

=======
import { Route, Routes } from './react-router-dom';
import { ProtectedRoute } from '@/components / ProtectedRoute';
import Marketplace from "@/pages / Marketplace";
import Categories from "@/pages / Categories";
import CategoryDetail from "@/pages / CategoryDetail";
import Featured from "@/pages / Featured";
import ListingDetail from "@/pages / ListingDetail";
import EquipmentPage from "@/pages / EquipmentPage";
import EquipmentDetail from "@/pages / EquipmentDetail";
import PostJob from "@/pages / PostJob";
import JobDetails from "@/pages / JobDetails";
import PublishProduct from "@/pages / PublishProduct";
import ServicesPage from "@/pages / ServicesPage";
import RequestQuote from "@/pages / RequestQuote";
import AIMatcher from "@/pages / AIMatcher";
import ServiceDescriptionGenerator from "@/pages / ServiceDescriptionGenerator";
import ITOnsiteServicesPage from "@/pages / ITOnsiteServicesPage";
import SearchPage from "@/pages / SearchPage";
import ProjectRoom from "@/pages / ProjectRoom";
import VideoCall from "@/pages / VideoCall";
const MarketplaceRoutes = () =>: any {
  return (
    <Routes>;
      {/* Marketplace Routes */}
      <Route path="/marketplace" element={<Marketplace />} />;
      <Route path="/categories" element={<Categories />} />;
      <Route path="/category/:slug" element={<CategoryDetail />} />;
      <Route path="/featured" element={<Featured />} />;
      <Route path="/marketplace / listing/:id" element={<ListingDetail />} />;
      <Route path="/listing/:id" element={<ListingDetail />} />;
      {/* Equipment Routes */}
      <Route path="/equipment" element={<EquipmentPage />} />;
      <Route path="/equipment/:id" element={<EquipmentDetail />} />;
      {/* Job Routes */}
      <Route;
        path="/post - job";
        element={
          <ProtectedRoute>;
            <PostJob />;
          </ProtectedRoute>;
        }
      />;
      <Route path="/jobs/:id" element={<JobDetails />} />;
      {/* AI Matcher Routes */}
      <Route path="/ai - matcher" element={<AIMatcher />} />;
      <Route path="/match" element={<AIMatcher />} />;
      {/* Creator Routes */}
      <Route;
        path="/publish";
        element={
          <ProtectedRoute>;
            <PublishProduct />;
          </ProtectedRoute>;
        }
      />;
      {/* Service Routes */}
      <Route path="/services" element={<ServicesPage />} />;
      <Route path="/it - onsite - services" element={<ITOnsiteServicesPage />} />;
      <Route path="/request - quote" element={<RequestQuote />} />;
      <Route path="/service - description - generator" element={<ServiceDescriptionGenerator />} />;
      {/* Search Route */}
      <Route path="/search" element={<SearchPage />} />;
      {/* Project Room Routes */}
      <Route;
        path="/project/:project_id";
        element={
          <ProtectedRoute>;
            <ProjectRoom />;
          </ProtectedRoute>;
        }
      />;
      {/* Video Call Routes */}
      <Route;
        path="/call/:room_id";
        element={
          <ProtectedRoute>;
            <VideoCall />;
          </ProtectedRoute>;
        }
      />;
    </Routes>);
}
;
export default MarketplaceRoutes;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
