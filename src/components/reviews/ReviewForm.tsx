rating?: number;
  review_text?: string;
  communication_rating?: number;
  quality_rating?: number;
  timeliness_rating?: number;
  would_work_again?: boolean;
import { useState } from "react",
import { Star } from 'lucide-react'
import { useForm } from "react-hook-form",
interface ReviewFormValues {
  rating?: number,
  review_text?: string,
  communication_rating?: number,
  quality_rating?: number,
  timeliness_rating?: number,
  would_work_again?: boolean,
  is_anonymous?: boolean
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  is_anonymous?: boolean;
}


interface ReviewFormProps {;
  projectId: string,;
  revieweeId: string,;
  revieweeName: string,;
  onSubmit: (data: any) => Promise<boolean>, ;

  }

  )
}
interface ReviewFormProps {
  project_id: string,
  reviewee_id: string,
  reviewee_name: string,
  on_submit: (data: any) => Promise < boolean>,
  }
  );
}