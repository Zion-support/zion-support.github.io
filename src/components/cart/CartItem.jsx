import React from 'react';
import { Button } from '@/components/ui/button';

export default function Page() {
</p>"
        <p className="text-sm text-muted-foreground">
          ${item.price.toFixed(2)}
        </p>
      </div>
      <input"
        type="number"
        min={1}
        value={item.quantity}
        onChange={e =>
          onUpdateQuantity?.(item.id, parseInt(e.target.value || '1', 10))
        }"
        className="w-16 bg-transparent border border-input rounded p-1 text-center"
      />"
      <span className="w-20 text-right">
        ${(item.price * item.quantity).toFixed(2)}
      </span>"
      <Button variant="outline" size="sm" onClick={() => onRemove?.(item.id)}>
        Remove
      </Button>
    </li>
  );
}
'"