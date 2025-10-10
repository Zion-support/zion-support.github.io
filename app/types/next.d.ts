export interface Metadata {
export interface MetadataRoute {
export type MetadataRouteType = 'sitemap' | 'robots' | 'manifest';
export interface MetadataRouteSitemap extends MetadataRoute {
export type GenerateMetadata = (params: GenerateMetadataParams) => Metadata | Promise<Metadata>;</Metadata></<<<Metadata>export</Metadata></<<Metadata>type</Metadata> GenerateViewport = (params: GenerateMetadataParams) => Viewport | Promise<Viewport>;</Viewpor>