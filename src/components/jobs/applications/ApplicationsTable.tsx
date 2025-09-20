interface ApplicationsTableProps {applications: JobApplication[];
processingId: string | null;
  onViewApplication: (applicationId: string) => Promise<void>;
onStatusChange: (applicationId: string newStatus: string) => Promise<void>;
}
