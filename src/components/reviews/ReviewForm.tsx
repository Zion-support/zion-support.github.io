

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

