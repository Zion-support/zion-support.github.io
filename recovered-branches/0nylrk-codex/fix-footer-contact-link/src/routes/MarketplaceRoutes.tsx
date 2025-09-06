
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/MarketplaceRoutes.tsx

=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import ProjectRoom from "@/pages/ProjectRoom";
import VideoCall from "@/pages/VideoCall";

import ProjectRoom from "@/pages/ProjectRoom",
import VideoCall from "@/pages/VideoCall",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
========
const MarketplaceRoutes = () => {;
  return (
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
;
const MarketplaceRoutes = () => {;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <Routes>;
      {/* Marketplace Routes */}
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/MarketplaceRoutes.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Job Routes */}
      <Route
        path="/post-job"
        element={
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/MarketplaceRoutes.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
export default MarketplaceRoutes;

},

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
const MarketplaceRoutes = () => {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
const MarketplaceRoutes = () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <Routes>;
      {/* Marketplace Routes */}

=======
const MarketplaceRoutes = () => {;
  return (;
    <Routes>;
      {/* Marketplace Routes */}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
      <Route
        path="/post-job"
        element={

========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/MarketplaceRoutes.tsx
=======
      {/* Equipment Routes */}
      <Route path="/equipment" element={<EquipmentPage />} />;
      <Route path="/equipment/:id" element={<EquipmentDetail />} />;
      {/* Job Routes */}
      <Route;
        path="/post-job";
        element={;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <ProtectedRoute>;
            <PostJob />;
          </ProtectedRoute>;
        } ;
      />;
      <Route path="/jobs/:id" element={<JobDetails />} />;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
      <Route;
        path="/publish";
        element={;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <ProtectedRoute>;
            <PublishProduct />;
          </ProtectedRoute>;
        } ;
      />;
<<<<<<< HEAD
<<<<<<< HEAD
=======
      ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Service Routes */}
      <Route path="/services" element={<ServicesPage />} />;
      <Route path="/it-onsite-services" element={<ITOnsiteServicesPage />} />;
      <Route path="/request-quote" element={<RequestQuote />} />;
      <Route path="/service-description-generator" element={<ServiceDescriptionGenerator />} />;
<<<<<<< HEAD
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
      {/* Search Route */}
      <Route path="/search" element={<SearchPage />} />;
      {/* Project Room Routes */}
      <Route;
        path="/project/:projectId";
        element={;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <ProtectedRoute>;
            <ProjectRoom />;
          </ProtectedRoute>;
        } ;
      />;
<<<<<<< HEAD
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
      {/* Video Call Routes */}
      <Route;
        path="/call/:roomId";
        element={;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <ProtectedRoute>;
            <VideoCall />;
          </ProtectedRoute>;
        } ;
      />;
    </Routes>;
<<<<<<< HEAD
<<<<<<< HEAD
  );
<<<<<<< HEAD
},;

export default MarketplaceRoutes;

=======
};
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/MarketplaceRoutes.tsx


=======

},


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/MarketplaceRoutes.tsx
export default MarketplaceRoutes;
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/MarketplaceRoutes.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/MarketplaceRoutes.tsx
=======
  );
},;
export default MarketplaceRoutes;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
