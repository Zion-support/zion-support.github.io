interface ResourceItem {;
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { Button } from '@/components / ui / button';
  Download,
  FileImage,
  FileText,
  FileType,
  FileVideo,
  Link,
} from 'lucide-react';
import { toast } from '@/hooks / use - toast';
import {
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
  Download
  FileImage
  FileText
  FileType
  FileVideo
  Link
} from 'lucide-react'
import { toast } from '@/hooks/use-toast'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Download, FileImage, FileText, FileType, FileVideo, Link } from 'lucide-react'
import { toast } from "@/hooks/use-toast",
interface ResourceItem {

  id: string,
  title: string,
  description: string,"
  type: 'image' | 'video' | 'document' | 'link',
  icon: JSX.Element,

  url: string
}

export function PartnerResources() {
  const resources: ResourceItem[] = [
    {





            Contact Partner Support;
          </Button>;
        </CardContent>;
      </Card>;
