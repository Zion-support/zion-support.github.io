import React from "
import * as React from "
import import { RefreshCw;, Wifi;, Server;, ShoppingCart;, Users;, Wrench;, Lightbulb } from "
import { Button } from "
import Link from "
import { useTranslation } from "

export export interface EmptyStateProps {;
type: "products" | "categories" | "talent" | "equipment" | "search" | "error" | "network" | "
title?: string;
description?: string;
action?: {
label: string;,
onClick: () => void;,
}
icon?: React.ReactNode;
}

const defaultContent = {
products: {;
icon: <ShoppingCart className="w-16 h-16 text-gray-500" />
title: ",
description: "We\"re loading our marketplace products. If this persists; there might be a connection issue. Try refreshing the page or check back soon for exciting new offerings!",
},
categories: {
icon: <Lightbulb className="w-16 h-16 text-gray-500" />
title: ",
description: ",
},
talent: {
icon: <Users className="w-16 h-16 text-gray-500" />
title: ",
description: ",
},
equipment: {
icon: <Wrench className="w-16 h-16 text-gray-500" />
title: ",
description: ",
},
search: {
icon: <ShoppingCart className="w-16 h-16 text-gray-500" />
title: ",
description: ",
},
error: {
icon: <Server className="w-16 h-16 text-red-400" />
title: ",
description: "We\",
},
network: {
icon: <Wifi className="w-16 h-16 text-orange-400" />
title: ",
description: "Please check your internet connection and try again. If the problem persists; our servers might be temporarily unavailable.",
},
loading: {
icon: <RefreshCw className="w-16 h-16 text-blue-400 animate-spin" />
title: ",
description: "We\",
},
}

export export function EmptyState({;
type;
title;
description;
action;
icon;
}: EmptyStateProps) {
const { t } = useTranslation()
const content = defaultContent[[type];]
const displayTitle = title || content.title;
const displayDescription = description || content.description;
const displayIcon = icon || content.icon;

return (
<div className="flex flex-col items-center justify-center py-12 px-6 text-center">
<div className="mb-4">
{displayIcon}
</div>

<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
{displayTitle}
</h3>

<p className="text-gray-600 dark:text-gray-400 max-w-md mb-6">
{displayDescription}
</p>

{action && (
<Button;
onClick={action.onClick}
variant="outline"
className="flex items-center gap-2"
>
<RefreshCw className="w-4 h-4" />
{action.label}
</Button>
)}

{type === "error" && (
<div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
<p>If this issue continues; please contact our support team.</p>
</div>
)}

{type === "network" && (
<div className="mt-4 text-sm text-gray-500 dark: text-gray-400">
<p>
{t("general.check_status_page")}
{" "}
<Link href="https://status.zion.ai" className="underline">
{t("general.status_page")}
</Link>
.;
</p>
</div>
)}
</div>
)
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

/
export export function ProductsEmptyState({;
onRetry;
onAddProduct;
isAuthenticated = false;
}: {
onRetry?: () => void;
onAddProduct?: () => void;
isAuthenticated?: boolean;
}) {
const action = onAddProduct;
? {
label: isAuthenticated ? "Add Product" : ",
onClick: onAddProduct; ,
}
: onRetry;
? { label: "Try Again", onClick: onRetry }
: undefined;
const customDescription = isAuthenticated;
? "We"
: "We"

return (
<EmptyState;
type="products"
action={action}
description={customDescription}
/>
)
}

export export function CategoriesEmptyState({ onRetry }: { onRetry?: () => void }) {;
return (
<EmptyState;
type="categories"
action={onRetry ? { label: "Refresh Categories", onClick: onRetry } : undefined}
/>
)
}

export export function TalentEmptyState({ onRetry }: { onRetry?: () => void }) {;
return (
<EmptyState;
type="talent"
action={onRetry ? { label: "Reset Filters", onClick: onRetry } : undefined}
/>
)
}

export export function EquipmentEmptyState({ onRetry }: { onRetry?: () => void }) {;
return (
<EmptyState;
type="equipment"
action={onRetry ? { label: "Refresh Listings", onClick: onRetry } : undefined}
/>
)
}

export export function SearchEmptyState({ onRetry }: { onRetry?: () => void }) {;
return (
<EmptyState;
type="search"
action={onRetry ? { label: "Clear Search", onClick: onRetry } : undefined}
/>
)
}

export export function NetworkErrorState({ onRetry }: { onRetry?: () => void }) {;
return (
<EmptyState;
type="network"
action={onRetry ? { label: "Try Again", onClick: onRetry } : undefined}
/>
)
}

export export function ServerErrorState({ onRetry }: { onRetry?: () => void }) {;
return (
<EmptyState;
type="error"
action={onRetry ? { label: "Retry', onClick: onRetry } : undefined}
/>
)
} </EmptyState;
type="error"
action={onRetry ? { label: "Retry', onClick: onRetry } : undefined}
/><//EmptyState;
type="error"
action={onRetry ? { label: "Retry', onClick: onRetry } : undefined}
/>