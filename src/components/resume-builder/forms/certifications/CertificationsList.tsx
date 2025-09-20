
import { Certification } from "@/types/resume";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";
import { format } from "date-fns";
interface CertificationsListProps {onDelete: (id: string) => void}
export function CertificationsList({ certifications onEdit onDelete }: CertificationsListProps) {if (certifications.length === 0) {
                <a