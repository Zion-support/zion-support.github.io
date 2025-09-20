export interface EmptyStateProps {
  type: 'products' | 'categories' | 'talent' | 'equipment' | 'search' | 'error' | 'network' | 'loading';
  title?: string;
  description?: string;
  action?: {
    label: string;,
onClick: () => void,
}
  icon?: React.ReactNode
  )
export function CategoriesEmptyState({ onRetry }: { onRetry?: () => void }) {
      />
  )
export function TalentEmptyState({ onRetry }: { onRetry?: () => void }) {
      />
  )
export function EquipmentEmptyState({ onRetry }: { onRetry?: () => void }) {
      />
  )
export function SearchEmptyState({ onRetry }: { onRetry?: () => void }) {
      />
  )
export function NetworkErrorState({ onRetry }: { onRetry?: () => void }) {
      />
  )
export function ServerErrorState({ onRetry }: { onRetry?: () => void }) {
      />
  )
}
}