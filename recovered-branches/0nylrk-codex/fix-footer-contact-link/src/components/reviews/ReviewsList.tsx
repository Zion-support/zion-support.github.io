
import { Review } from "@/types/reviews";
import { ReviewCard } from "./ReviewCard";

interface ReviewsListProps {
  reviews: Review[];
  isLoading: boolean;
