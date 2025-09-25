import React from "react",
import {AppLayout} from "@/layout/AppLayout",
import {SEO} from "@/components/SEO",
import {MetadataManager} from "@/components/mobile-app/admin/MetadataManager",
import React from "react",
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
import { MetadataManager } from "@/components/mobile-app/admin/MetadataManager",
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props),
    this.state = { hasError: false },
  }
,
  static getDerivedStateFromError(error) {
    return { hasError: true },
  }
,
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)}
,
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>}
,
    return this.props.children}
}
,
const AppMetadataManager: React.FC = () => {
  return (
    <AppLayout>,
      <SEO
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982,
        title="App Metadata Manager",
        description="Manage app store metadata for the Zion mobile application",
        noindex={true}
      />,
      <div className="container py-8">,
        <h1 className="text-3xl font-bold text-zion-cyan mb-8">App Metadata Manager</h1>,
        <MetadataManager />,
      </div>,
    </AppLayout>),
export default AppMetadataManager,
const AppMetadataManager: React.FC = () => {
  return (
    <AppLayout>,
      <SEO
        title="App Metadata Manager",
        description="Manage app store metadata for the Zion mobile application",
        noindex={true}
      />,
      <div className="container py - 8">,
        <h1 className="text - 3xl font - bold text - zion - cyan mb - 8">App Metadata Manager</h1>,
        <MetadataManager />,
      </div>,
    </AppLayout>)}
,
export default AppMetadataManager,
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming))}