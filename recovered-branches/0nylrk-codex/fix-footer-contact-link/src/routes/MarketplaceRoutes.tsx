<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
const MarketplaceRoutes = () => {
  return (
    <Routes>;
      {/* Marketplace Routes */}

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {Route, Routes} from "react-router-dom";
import {ProtectedRoute} from "@/components/ProtectedRoute";
=======
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "@/components/ProtectedRoute";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "@/components/ProtectedRoute";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import ProjectRoom from "@/pages/ProjectRoom";
import VideoCall from "@/pages/VideoCall";
const MarketplaceRoutes = () => {

=======
const MarketplaceRoutes = () => {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
    <Routes>;
      {/* Marketplace Routes */}"
      <Route path="/marketplace" element={<Marketplace />} />"
      <Route path="/categories" element={<Categories />} />"
      <Route path="/category/:slug" element={<CategoryDetail />} />"
      <Route path="/featured" element={<Featured />} />"
      <Route path="/marketplace/listing/:id" element={<ListingDetail />} />"
      <Route path="/listing/:id" element={<ListingDetail />} />

      {/* Equipment Routes */}"
      <Route path="/equipment" element={<EquipmentPage />} />"
      <Route path="/equipment/:id" element={<EquipmentDetail />} />

      {/* Job Routes */}
      <Route"
        path="/post-job"
        element={}
          <ProtectedRoute>
            <PostJob />
          </ProtectedRoute>
        }
      />"
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
      <Route"
        path="/service-description-generator"
        element={<ServiceDescriptionGenerator />}
      />

      {/* Search Route */}"
      <Route path="/search" element={<SearchPage />} />

      {/* Project Room Routes */}
      <Route"
        path="/project/:projectId"
        element={}
          <ProtectedRoute>
            <ProjectRoom />
          </ProtectedRoute>
        }
      />

      {/* Video Call Routes */}
      <Route"
        path="/call/:roomId"
        element={}
          <ProtectedRoute>
            <VideoCall />
          </ProtectedRoute>
        }
      />
    </Routes>
<<<<<<< HEAD
<<<<<<< HEAD
  )
}
export default MarketplaceRoutes;

},

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

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
const MarketplaceRoutes = () => {;
  return (
    <Routes>;
      {/* Marketplace Routes */}
const MarketplaceRoutes = () => {;
  return (;
    <Routes>;
      {/* Marketplace Routes */}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
      <Route
        path="/post-job"
        element={

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
<Route
        path="/publish" 
        element={
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
      <Route
        path="/project/:projectId" 
        element={
          <ProtectedRoute>;
            <ProjectRoom />;
          </ProtectedRoute>;
        } ;
      />;
{/* Video Call Routes */}
      <Route
        path="/call/:roomId" 
        element={
          <ProtectedRoute>;
            <VideoCall />;
          </ProtectedRoute>;
        } ;
      />;
    </Routes>;
);
},;

export default MarketplaceRoutes;
export default MarketplaceRoutes;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export default MarketplaceRoutes;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
);
};

};

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

},

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
const MarketplaceRoutes = () => {
const MarketplaceRoutes = () => {;
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
=======
};

},

export default MarketplaceRoutes;

import { Route, Routes } from './react-router-dom';'
import { ProtectedRoute } from '@/components / ProtectedRoute';"
import Marketplace from "@/pages / Marketplace";"
import Categories from "@/pages / Categories";"
import CategoryDetail from "@/pages / CategoryDetail";"
import Featured from "@/pages / Featured";"
import ListingDetail from "@/pages / ListingDetail";"
import EquipmentPage from "@/pages / EquipmentPage";"
import EquipmentDetail from "@/pages / EquipmentDetail";"
import PostJob from "@/pages / PostJob";"
import JobDetails from "@/pages / JobDetails";"
import PublishProduct from "@/pages / PublishProduct";"
import ServicesPage from "@/pages / ServicesPage";"
import RequestQuote from "@/pages / RequestQuote";"
import AIMatcher from "@/pages / AIMatcher";"
import ServiceDescriptionGenerator from "@/pages / ServiceDescriptionGenerator";"
import ITOnsiteServicesPage from "@/pages / ITOnsiteServicesPage";"
import SearchPage from "@/pages / SearchPage";"
import ProjectRoom from "@/pages / ProjectRoom";"
import VideoCall from "@/pages / VideoCall";
const MarketplaceRoutes = () =>: any {}
  return (
    <Routes>;
      {/* Marketplace Routes */}"
      <Route path="/marketplace" element={<Marketplace />} />;"
      <Route path="/categories" element={<Categories />} />;"
      <Route path="/category/:slug" element={<CategoryDetail />} />;"
      <Route path="/featured" element={<Featured />} />;"
      <Route path="/marketplace / listing/:id" element={<ListingDetail />} />;"
      <Route path="/listing/:id" element={<ListingDetail />} />;
      {/* Equipment Routes */}"
      <Route path="/equipment" element={<EquipmentPage />} />;"
      <Route path="/equipment/:id" element={<EquipmentDetail />} />;
      {/* Job Routes */}
      <Route;"
        path="/post - job";
        element={}
          <ProtectedRoute>;
            <PostJob />;
          </ProtectedRoute>;
        }
      />;"
      <Route path="/jobs/:id" element={<JobDetails />} />;
      {/* AI Matcher Routes */}"
      <Route path="/ai - matcher" element={<AIMatcher />} />;"
      <Route path="/match" element={<AIMatcher />} />;
      {/* Creator Routes */}
      <Route;"
        path="/publish";
        element={}
          <ProtectedRoute>;
            <PublishProduct />;
          </ProtectedRoute>;
        }
      />;
      {/* Service Routes */}"
      <Route path="/services" element={<ServicesPage />} />;"
      <Route path="/it - onsite - services" element={<ITOnsiteServicesPage />} />;"
      <Route path="/request - quote" element={<RequestQuote />} />;"
      <Route path="/service - description - generator" element={<ServiceDescriptionGenerator />} />;
      {/* Search Route */}"
      <Route path="/search" element={<SearchPage />} />;
      {/* Project Room Routes */}
      <Route;"
        path="/project/:project_id";
        element={}
          <ProtectedRoute>;
            <ProjectRoom />;
          </ProtectedRoute>;
        }
      />;
      {/* Video Call Routes */}
      <Route;"
        path="/call/:room_id";
        element={}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <ProtectedRoute>;
            <VideoCall />;
          </ProtectedRoute>;
        }
      />;
    </Routes>);
}
};

},
},;
;
export default MarketplaceRoutes,; const MarketplaceRoutes = () => {
  return (<Routes> {
  /* Marketplace Routes */ 
}<Route path="/marketplace" element= {
  <Marketplace /> 
}/> <Route path="/categories" element= {
  <Categories /> 
}/> <Route path="/category/:slug" element= {
  <CategoryDetail /> 
}/> <Route path="/featured" element= {
  <Featured /> 
}/> <Route path="/marketplace/listing/:id" element= {
  <ListingDetail /> 
}/> <Route path="/listing/:id" element= {
  <ListingDetail /> 
}/> {
  /* Equipment Routes */ 
}<Route path="/equipment" element= {
  <EquipmentPage /> 
}/> <Route path="/equipment/:id" element= {
  <EquipmentDetail /> 
}/> /* Job Routes */ 
}<Route <PostJob /> </ProtectedRoute> 
}/> {
  /* Creator Routes */ 
}<Route <PublishProduct /> </ProtectedRoute> 
}/> {
  /* Project Room Routes */ 
}<Route <ProjectRoom /> </ProtectedRoute> 
}/> {
  /* Video Call Routes */ 
}<Route <VideoCall /> </ProtectedRoute> 
}/> </Routes>) 
};
export default MarketplaceRoutes;
  );
},;
export default MarketplaceRoutes;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
;
export default MarketplaceRoutes;
;

export default MarketplaceRoutes;

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export default MarketplaceRoutes;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
import ProjectRoom from "@/pages/ProjectRoom";
import VideoCall from "@/pages/VideoCall";

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
