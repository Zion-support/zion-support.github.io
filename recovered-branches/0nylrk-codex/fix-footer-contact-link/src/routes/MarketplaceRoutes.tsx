<<<<<<< HEAD
const MarketplaceRoutes = () => {

  return (
    <Routes>;
      {/* Marketplace Routes */}

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
const MarketplaceRoutes = () => {

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
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
const MarketplaceRoutes = () => {

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
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
const MarketplaceRoutes = $2;
export default MarketplaceRoutes,
=======

import ProjectRoom from "@/pages/ProjectRoom",
import VideoCall from "@/pages/VideoCall",
const MarketplaceRoutes = () => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
const MarketplaceRoutes = () => {;
  return (

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
    <Routes>;
      {/* Marketplace Routes */}
<<<<<<< HEAD

import {Route, Routes} from "react-router-dom";
import {ProtectedRoute} from "@/components/ProtectedRoute";
=======
      <Route path="/marketplace" element={<Marketplace />} />;
      <Route path="/categories" element={<Categories />} />;
      <Route path="/category/:slug" element={<CategoryDetail />} />;
      <Route path="/featured" element={<Featured />} />;
      <Route path="/marketplace/listing/:id" element={<ListingDetail />} />;
      <Route path="/listing/:id" element={<ListingDetail />} />;
      {/* Job Routes */}
      <Route
        path="/post-job"
        element={
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <ProtectedRoute>
            <PostJob />
          </ProtectedRoute>
        }
<<<<<<< HEAD
      />"
      <Route path="/jobs/:id" element={<JobDetails />} />

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
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <ProtectedRoute>
            <ProjectRoom />
          </ProtectedRoute>
        }
      />
      {/* Video Call Routes */}
<<<<<<< HEAD
      <Route"
        path="/call/:roomId"
        element={}
=======
      <Route
        path="/call/:roomId"
        element={
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <Route path="/marketplace" element={<Marketplace />} />;
      <Route path="/categories" element={<Categories />} />;
      <Route path="/category/:slug" element={<CategoryDetail />} />;
      <Route path="/featured" element={<Featured />} />;
      <Route path="/marketplace/listing/:id" element={<ListingDetail />} />;
      <Route path="/listing/:id" element={<ListingDetail />} />;
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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

import ProjectRoom from "@/pages/ProjectRoom";
import VideoCall from "@/pages/VideoCall";
const MarketplaceRoutes = () => {

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

  )
}
export default MarketplaceRoutes;

},

export default MarketplaceRoutes,
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";"
import { ProtectedRoute } from "@/components/ProtectedRoute";"
import Marketplace from "Marketplace";"
import Categories from "Categories";"
import CategoryDetail from "CategoryDetail";"
import Featured from "Featured";"
import ListingDetail from "ListingDetail";"
import EquipmentPage from "EquipmentPage";"
import EquipmentDetail from "EquipmentDetail";"
import PostJob from "PostJob";"
import JobDetails from "JobDetails";"
import PublishProduct from "PublishProduct";"
import ServicesPage from "ServicesPage";"
import RequestQuote from "RequestQuote";"
import AIMatcher from "AIMatcher";"
import ServiceDescriptionGenerator from "ServiceDescriptionGenerator";"
import ITOnsiteServicesPage from "ITOnsiteServicesPage";"
import SearchPage from "SearchPage";"
import ProjectRoom from "ProjectRoom";"
import VideoCall from "VideoCall";"
}
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

>>>>>>> origin/chore/fix-lint-and-merge
const MarketplaceRoutes = () => {;
  return (
    <Routes>;
      {/* Marketplace Routes */}

      {/* Job Routes */}
      <Route
        path="/post-job"
        element={

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <ProtectedRoute>;
            <PostJob />;
          </ProtectedRoute>;
        } ;
      />;
      <Route path="/jobs/:id" element={<JobDetails />} />;
<<<<<<< HEAD
=======
<<<<<<< HEAD
      {/* AI Matcher Routes */}
      <Route path="/ai-matcher" element={<AIMatcher />} />;
      <Route path="/match" element={<AIMatcher />} />;
      {/* Creator Routes */}
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
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      {/* AI Matcher Routes */}
      <Route path="/ai-matcher" element={<AIMatcher />} />;
      <Route path="/match" element={<AIMatcher />} />;

      {/* Creator Routes */}
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
      <Route
        path="/publish" 
        element={
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <ProtectedRoute>;
            <PublishProduct />;
          </ProtectedRoute>;
        } ;
      />;
<<<<<<< HEAD

=======
<<<<<<< HEAD
      ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      {/* Service Routes */}
      <Route path="/services" element={<ServicesPage />} />;
      <Route path="/it-onsite-services" element={<ITOnsiteServicesPage />} />;
      <Route path="/request-quote" element={<RequestQuote />} />;
      <Route path="/service-description-generator" element={<ServiceDescriptionGenerator />} />;
<<<<<<< HEAD

=======
<<<<<<< HEAD
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
=======

<<<<<<< HEAD
=======
      {/* Search Route */}
      <Route path="/search" element={<SearchPage />} />;

      {/* Project Room Routes */}
      <Route
        path="/project/:projectId" 
        element={
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <ProtectedRoute>;
            <ProjectRoom />;
          </ProtectedRoute>;
        } ;
      />;
<<<<<<< HEAD

=======
<<<<<<< HEAD
      ;
      {/* Video Call Routes */}
      <Route ;
        path="/call/:roomId" ;
        element={;
      {/* Video Call Routes */}
      <Route;
        path="/call/:roomId";
        element={;
=======

<<<<<<< HEAD
=======
      {/* Video Call Routes */}
      <Route
        path="/call/:roomId" 
        element={
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <ProtectedRoute>;
            <VideoCall />;
          </ProtectedRoute>;
        } ;
      />;
    </Routes>;
<<<<<<< HEAD

export default MarketplaceRoutes;

=======
<<<<<<< HEAD

export default MarketplaceRoutes;

=======
<<<<<<< HEAD
=======
  );
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
};

},


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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
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
<<<<<<< HEAD
  );
},;
export default MarketplaceRoutes;
=======
;
<<<<<<< HEAD
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
export default MarketplaceRoutes;
=======
export default MarketplaceRoutes;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
