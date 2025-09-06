
import { Edit, Trash2 } from 'lucide-react'
import { format } from 'date-fns';
interface CertificationsListProps {

  certifications: Certification[]
  onEdit: (cert: Certification) => void
  onDelete: (id: string) => void
export function CertificationsList({
  certifications
  onEdit
  onDelete
}: CertificationsListProps) {  if (certifications.length === 0) {
export function CertificationsList({ certifications, onEdit, onDelete }: CertificationsListProps) {
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={() => onEdit(cert)}
                  aria-label='Edit certification'                  variant="ghost"
                  size="icon"
                  onClick = {() => onEdit(cert),}

                  aria-label="Edit certification"
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button

