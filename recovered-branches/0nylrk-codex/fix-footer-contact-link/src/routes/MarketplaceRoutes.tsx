<<<<<<< HEAD

<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
const MarketplaceRoutes = () => {
=======
const MarketplaceRoutes = () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <Routes>;
      {/* Marketplace Routes */}

=======
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
import ProjectRoom from "@/pages/ProjectRoom";
import VideoCall from "@/pages/VideoCall";

import ProjectRoom from "@/pages/ProjectRoom",
import VideoCall from "@/pages/VideoCall",
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
const MarketplaceRoutes = () => {
const MarketplaceRoutes = () => {;
  return (
    <Routes>;
      {/* Marketplace Routes */}
<<<<<<< HEAD

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
<<<<<<< HEAD

      {/* Equipment Routes */}
      <Route path="/equipment" element={<EquipmentPage />} />;
      <Route path="/equipment/:id" element={<EquipmentDetail />} />;


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      {/* Job Routes */}
      <Route
        path="/post-job"
        element={
<<<<<<< HEAD

=======
      ;
      {/* Equipment Routes */}
      <Route path="/equipment" element={<EquipmentPage />} />;
      <Route path="/equipment/:id" element={<EquipmentDetail />} />;
      ;
      {/* Job Routes */}
      <Route;
        path="/post-job" ;
        element={;
      {/* Equipment Routes */}
      <Route path="/equipment" element={<EquipmentPage />} />;
      <Route path="/equipment/:id" element={<EquipmentDetail />} />;
      {/* Job Routes */}
      <Route;
        path="/post-job";
        element={;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <ProtectedRoute>;
            <PostJob />;
          </ProtectedRoute>;
        } ;
      />;
      <Route path="/jobs/:id" element={<JobDetails />} />;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      {/* AI Matcher Routes */}
      <Route path="/ai-matcher" element={<AIMatcher />} />;
      <Route path="/match" element={<AIMatcher />} />;

      {/* Creator Routes */}
<<<<<<< HEAD
      <Route
        path="/publish" 
        element={
=======
      ;
      {/* AI Matcher Routes */}
      <Route path="/ai-matcher" element={<AIMatcher />} />;
      <Route path="/match" element={<AIMatcher />} />;
      ;
      {/* Creator Routes */}
      <Route ;
        path="/publish" ;
        element={;
      <Route;
        path="/publish";
        element={;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <ProtectedRoute>;
            <PublishProduct />;
          </ProtectedRoute>;
        } ;
      />;
<<<<<<< HEAD

=======
      ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      {/* Service Routes */}
      <Route path="/services" element={<ServicesPage />} />;
      <Route path="/it-onsite-services" element={<ITOnsiteServicesPage />} />;
      <Route path="/request-quote" element={<RequestQuote />} />;
      <Route path="/service-description-generator" element={<ServiceDescriptionGenerator />} />;
<<<<<<< HEAD

      {/* Search Route */}
      <Route path="/search" element={<SearchPage />} />;

      {/* Project Room Routes */}
      <Route
        path="/project/:projectId" 
        element={
=======
      ;
      {/* Search Route */}
      <Route path="/search" element={<SearchPage />} />;
      ;
      {/* Project Room Routes */}
      <Route ;
        path="/project/:projectId" ;
        element={;
      {/* Search Route */}
      <Route path="/search" element={<SearchPage />} />;
      {/* Project Room Routes */}
      <Route;
        path="/project/:projectId";
        element={;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <ProtectedRoute>;
            <ProjectRoom />;
          </ProtectedRoute>;
        } ;
      />;
<<<<<<< HEAD

      {/* Video Call Routes */}
      <Route
        path="/call/:roomId" 
        element={
=======
      ;
      {/* Video Call Routes */}
      <Route ;
        path="/call/:roomId" ;
        element={;
      {/* Video Call Routes */}
      <Route;
        path="/call/:roomId";
        element={;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <ProtectedRoute>;
            <VideoCall />;
          </ProtectedRoute>;
        } ;
      />;
    </Routes>;
<<<<<<< HEAD
<<<<<<< HEAD
  );
};


=======
=======
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
};


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

},


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  ),;
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export default MarketplaceRoutes;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
