import { Loader2 } from 'lucide-react'
interface ResultsHeaderProps {
  isLoading: boolean
  resultCount: number
xport function ResultsHeader({ isLoading, resultCount }: ResultsHeaderProps) {
          {resultCount === 0
            ? 'No talents found. Try adjusting your filters.'
            : `Found ${resultCount} talent${resultCount !== 1 ? 's' : ''}`}          {resultCount === 0 ? (
;
