export interface Integration {
  id: string;
  name: string;
  description: string;
  logo_url: string;
  status: IntegrationStatus;
}
export interface SyncLog {
  id: string;
  integration: string;
  event: string;
  status: "success" | "error" | "warning";
