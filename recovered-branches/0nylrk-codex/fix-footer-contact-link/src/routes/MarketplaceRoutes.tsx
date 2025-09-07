
import { Route, Routes } from "react-router-dom";""
import { ProtectedRoute } from "@/components/ProtectedRoute";""
import Marketplace from "@/pages/Marketplace";""
import Categories from "@/pages/Categories";""
import CategoryDetail from "@/pages/CategoryDetail";""
import Featured from "@/pages/Featured";""
import ListingDetail from "@/pages/ListingDetail";""
import EquipmentPage from "@/pages/EquipmentPage";""
import EquipmentDetail from "@/pages/EquipmentDetail";""
import PostJob from "@/pages/PostJob";""
import JobDetails from "@/pages/JobDetails";""
import PublishProduct from "@/pages/PublishProduct";""
import ServicesPage from "@/pages/ServicesPage";""
import RequestQuote from "@/pages/RequestQuote";""
import AIMatcher from "@/pages/AIMatcher";""
import ServiceDescriptionGenerator from "@/pages/ServiceDescriptionGenerator";""
import ITOnsiteServicesPage from "@/pages/ITOnsiteServicesPage";""
import SearchPage from "@/pages/SearchPage";""
import ProjectRoom from "@/pages/ProjectRoom";""
import VideoCall from "@/pages/VideoCall";"
const MarketplaceRoutes = () => {
const MarketplaceRoutes = () => {;
  return (
    <Routes>;
</Routes>"
      <Route path="/marketplace" element={<Marketplace />} />"
</Route>"
      <Route path="/categories" element={<Categories />} />"
</Route>"
      <Route path="/category/:slug" element={<CategoryDetail />} />"
</Route>"
      <Route path="/featured" element={<Featured />} />"
</Route>"
      <Route path="/marketplace/listing/:id" element={<ListingDetail />} />"
</Route>"
      <Route path="/listing/:id" element={<ListingDetail />} />"
</Route>"
      <Route path="/equipment" element={<EquipmentPage />} />"
</Route>"
      <Route path="/equipment/:id" element={<EquipmentDetail />} />"
</Route>
      <Route;"
        path="/post-job""
        element={
          <ProtectedRoute>
</Route>
            <PostJob />
</PostJob>
          </ProtectedRoute>"
      <Route path="/jobs/:id" element={<JobDetails />} />"
</Route>"
      <Route path="/ai-matcher" element={<AIMatcher />} />"
</Route>"
      <Route path="/match" element={<AIMatcher />} />"
</Route>
      <Route;"
        path="/publish""
        element={
          <ProtectedRoute>
</Route>
            <PublishProduct />
</PublishProduct>
          </ProtectedRoute>"
      <Route path="/services" element={<ServicesPage />} />"
</Route>"
      <Route path="/it-onsite-services" element={<ITOnsiteServicesPage />} />"
</Route>"
      <Route path="/request-quote" element={<RequestQuote />} />"
</Route>
      <Route;"
        path="/service-description-generator""
        element={<ServiceDescriptionGenerator />}
</Route>"
      <Route path="/search" element={<SearchPage />} />"
</Route>
      <Route;"
        path="/project/:projectId""
        element={
          <ProtectedRoute>
</Route>
            <ProjectRoom />
</ProjectRoom>
          </ProtectedRoute>
      <Route;"
        path="/call/:roomId""
        element={
          <ProtectedRoute>
</Route>
            <VideoCall />
</VideoCall>
          </ProtectedRoute>
    </Routes>
    <Routes>;
</Routes>"
      <Route path="/marketplace" element={<Marketplace />} />;"
</Route>"
      <Route path="/categories" element={<Categories />} />;"
</Route>"
      <Route path="/category/:slug" element={<CategoryDetail />} />;"
</Route>"
      <Route path="/featured" element={<Featured />} />;"
</Route>"
      <Route path="/marketplace / listing/:id" element={<ListingDetail />} />;"
</Route>"
      <Route path="/listing/:id" element={<ListingDetail />} />;"
</Route>"
      <Route path="/equipment" element={<EquipmentPage />} />;"
</Route>"
      <Route path="/equipment/:id" element={<EquipmentDetail />} />;"
</Route>
      <Route;"
        path="/post - job";"
        element={
          <ProtectedRoute>;
</Route>
            <PostJob />;
</PostJob>
          </ProtectedRoute>;"
      <Route path="/jobs/:id" element={<JobDetails />} />;"
</Route>"
      <Route path="/ai - matcher" element={<AIMatcher />} />;"
</Route>"
      <Route path="/match" element={<AIMatcher />} />;"
</Route>
      <Route;"
        path="/publish";"
        element={
          <ProtectedRoute>;
</Route>
            <PublishProduct />;
</PublishProduct>
          </ProtectedRoute>;"
      <Route path="/services" element={<ServicesPage />} />;"
</Route>"
      <Route path="/it - onsite - services" element={<ITOnsiteServicesPage />} />;"
</Route>"
      <Route path="/request - quote" element={<RequestQuote />} />;"
</Route>"
      <Route path="/service - description - generator" element={<ServiceDescriptionGenerator />} />;"
</Route>"
      <Route path="/search" element={<SearchPage />} />;"
</Route>
      <Route;"
        path="/project/:project_id";"
        element={
          <ProtectedRoute>;
</Route>
            <ProjectRoom />;
</ProjectRoom>
          </ProtectedRoute>;
      <Route;"
        path="/call/:room_id";"
        element={
          <ProtectedRoute>;
</Route>
            <VideoCall />;
</VideoCall>
          </ProtectedRoute>;)
    </Routes>);
  return (<Routes> {
</Routes>"
}<Route path="/marketplace" element= {"
  <Marketplace /> 
</Route>"
}/> <Route path="/categories" element= {"
  <Categories /> 
</Route>"
}/> <Route path="/category/:slug" element= {"
  <CategoryDetail /> 
</Route>"
}/> <Route path="/featured" element= {"
  <Featured /> 
</Route>"
}/> <Route path="/marketplace/listing/:id" element= {"
  <ListingDetail /> 
</Route>"
}/> <Route path="/listing/:id" element= {"
  <ListingDetail /> 
</Route>"
}<Route path="/equipment" element= {"
  <EquipmentPage /> 
</Route>"
}/> <Route path="/equipment/:id" element= {"
  <EquipmentDetail /> 
</Route>
}<Route <PostJob /> </ProtectedRoute> 
</Route>
}<Route <PublishProduct /> </ProtectedRoute> 
</Route>
}<Route <ProjectRoom /> </ProtectedRoute> 
</Route>
}<Route <VideoCall /> </ProtectedRoute> 
</Route>)
}/> </Routes>) "

