<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"export function CartItem({ item,onRemove,onUpdateQuantity }) {" return (); <li className="flex items-center gap-4">" <img" src={item.image | "/placeholder.svg"}" alt={item.name}" className="w-16 h-16 object-cover rounded" / / />" <div className="flex-1">" <p className="font-medium">{item.name}</p>" <p className="text-sm text-muted-foreground">" ${item.price.toFixed(2)}" </p> </div> <input" type="number" min={1}" value={item.quantity} onChange={e = / /> onUpdateQuantity?.(item.id,parseInt(e.target.value | "1",10))" }" className="w-16 bg-transparent border border-input rounded p-1 text-center" />" <span className="w-20 text-right">" ${(item.price * item.quantity).toFixed(2)}" </span>" <Button variant="outline" size="sm" onClick={() => onRemove?.(item.id)}>" Remove" </Button> </li> )} ";"""
=======
"export function CartItem({ item,onRemove,onUpdateQuantity }) {\" return (); <li className=\"flex items-center gap-4\">\" <img\" src={item.image || \"/placeholder.svg\"}\" alt={item.name}\" className=\"w-16 h-16 object-cover rounded\" / / />\" <div className=\"flex-1\">\" <p className=\"font-medium\">{item.name}</p>\" <p className=\"text-sm text-muted-foreground\">\" ${item.price.toFixed(2)}\" </p> </div> <input\" type=\"number\" min={1}\" value={item.quantity} onChange={e = / /> onUpdateQuantity?.(item.id,parseInt(e.target.value || \"1\",10))\" }\" className=\"w-16 bg-transparent border border-input rounded p-1 text-center\" />\" <span className=\"w-20 text-right\">\" ${(item.price * item.quantity).toFixed(2)}\" </span>\" <Button variant=\"outline\" size=\"sm\" onClick={() => onRemove?.(item.id)}>\" Remove\" </Button> </li> )} \";\"
"export function CartItem({ item,onRemove,onUpdateQuantity }) {" return (); <li className="flex items-center gap-4">" <img" src={item.image | "/placeholder.svg"}" alt={item.name}" className="w-16 h-16 object-cover rounded" / / />" <div className="flex-1">" <p className="font-medium">{item.name}</p>" <p className="text-sm text-muted-foreground">" ${item.price.toFixed(2)}" </p> </div> <input" type="number" min={1}" value={item.quantity} onChange={e = / /> onUpdateQuantity?.(item.id,parseInt(e.target.value | "1",10))" }" className="w-16 bg-transparent border border-input rounded p-1 text-center" />" <span className="w-20 text-right">" ${(item.price * item.quantity).toFixed(2)}" </span>" <Button variant="outline" size="sm" onClick={() => onRemove?.(item.id)}>" Remove" </Button> </li> )} ";"""
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
"export function CartItem({ item,onRemove,onUpdateQuantity }) {\" return (); <li className=\"flex items-center gap-4\">\" <img\" src={item && item.image || \"/placeholder && placeholder.svg\"}\" alt={item && item.name}\" className=\"w-16 h-16 object-cover rounded\" / / />\" <div className=\"flex-1\">\" <p className=\"font-medium\">{item && item.name}</p>\" <p className=\"text-sm text-muted-foreground\">\" ${item && item.price.toFixed(2)}\" </p> </div> <input\" type=\"number\" min={1}\" value={item && item.quantity} onChange={e = / /> onUpdateQuantity?.(item && item.id,parseInt(e && e.target.value || \"1\",10))\" }\" className=\"w-16 bg-transparent border border-input rounded p-1 text-center\" />\" <span className=\"w-20 text-right\">\" ${(item && item.price * item && item.quantity).toFixed(2)}\" </span>\" <Button variant=\"outline\" size=\"sm\" onClick={() => onRemove?.(item && item.id)}>\" Remove\" </Button> </li> )} \";\"

"export function CartItem({ item,onRemove,onUpdateQuantity }) {" return (); <li className="flex items-center gap-4">" <img" src={item && item.image | "/placeholder && placeholder.svg"}" alt={item && item.name}" className="w-16 h-16 object-cover rounded" / / />" <div className="flex-1">" <p className="font-medium">{item && item.name}</p>" <p className="text-sm text-muted-foreground">" ${item && item.price.toFixed(2)}" </p> </div> <input" type="number" min={1}" value={item && item.quantity} onChange={e = / /> onUpdateQuantity?.(item && item.id,parseInt(e && e.target.value | "1",10))" }" className="w-16 bg-transparent border border-input rounded p-1 text-center" />" <span className="w-20 text-right">" ${(item && item.price * item && item.quantity).toFixed(2)}" </span>" <Button variant="outline" size="sm" onClick={() => onRemove?.(item && item.id)}>" Remove" </Button> </li> )} ";"""

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
"export function CartItem({ item,onRemove,onUpdateQuantity }) {\" return (); <li className=\"flex items-center gap-4\">\" <img\" src={item.image || \"/placeholder.svg\"}\" alt={item.name}\" className=\"w-16 h-16 object-cover rounded\" / / />\" <div className=\"flex-1\">\" <p className=\"font-medium\">{item.name}</p>\" <p className=\"text-sm text-muted-foreground\">\" ${item.price.toFixed(2)}\" </p> </div> <input\" type=\"number\" min={1}\" value={item.quantity} onChange={e = / /> onUpdateQuantity?.(item.id,parseInt(e.target.value || \"1\",10))\" }\" className=\"w-16 bg-transparent border border-input rounded p-1 text-center\" />\" <span className=\"w-20 text-right\">\" ${(item.price * item.quantity).toFixed(2)}\" </span>\" <Button variant=\"outline\" size=\"sm\" onClick={() => onRemove?.(item.id)}>\" Remove\" </Button> </li> )} \";\"
"export function CartItem({ item,onRemove,onUpdateQuantity }) {" return (); <li className="flex items-center gap-4">" <img" src={item.image | "/placeholder.svg"}" alt={item.name}" className="w-16 h-16 object-cover rounded" / / />" <div className="flex-1">" <p className="font-medium">{item.name}</p>" <p className="text-sm text-muted-foreground">" ${item.price.toFixed(2)}" </p> </div> <input" type="number" min={1}" value={item.quantity} onChange={e = / /> onUpdateQuantity?.(item.id,parseInt(e.target.value | "1",10))" }" className="w-16 bg-transparent border border-input rounded p-1 text-center" />" <span className="w-20 text-right">" ${(item.price * item.quantity).toFixed(2)}" </span>" <Button variant="outline" size="sm" onClick={() => onRemove?.(item.id)}>" Remove" </Button> </li> )} ";"""
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
"export function CartItem({ item,onRemove,onUpdateQuantity }) {" return (); <li className="flex items-center gap-4">" <img" src={item.image | "/placeholder.svg"}" alt={item.name}" className="w-16 h-16 object-cover rounded" / / />" <div className="flex-1">" <p className="font-medium">{item.name}</p>" <p className="text-sm text-muted-foreground">" ${item.price.toFixed(2)}" </p> </div> <input" type="number" min={1}" value={item.quantity} onChange={e = / /> onUpdateQuantity?.(item.id,parseInt(e.target.value | "1",10))" }" className="w-16 bg-transparent border border-input rounded p-1 text-center" />" <span className="w-20 text-right">" ${(item.price * item.quantity).toFixed(2)}" </span>" <Button variant="outline" size="sm" onClick={() => onRemove?.(item.id)}>" Remove" </Button> </li> )} ";"""
=======
"export function CartItem({ item,onRemove,onUpdateQuantity }) {\" return (); <li className=\"flex items-center gap-4\">\" <img\" src={item.image || \"/placeholder.svg\"}\" alt={item.name}\" className=\"w-16 h-16 object-cover rounded\" / / />\" <div className=\"flex-1\">\" <p className=\"font-medium\">{item.name}</p>\" <p className=\"text-sm text-muted-foreground\">\" ${item.price.toFixed(2)}\" </p> </div> <input\" type=\"number\" min={1}\" value={item.quantity} onChange={e = / /> onUpdateQuantity?.(item.id,parseInt(e.target.value || \"1\",10))\" }\" className=\"w-16 bg-transparent border border-input rounded p-1 text-center\" />\" <span className=\"w-20 text-right\">\" ${(item.price * item.quantity).toFixed(2)}\" </span>\" <Button variant=\"outline\" size=\"sm\" onClick={() => onRemove?.(item.id)}>\" Remove\" </Button> </li> )} \";\"
"export function CartItem({ item,onRemove,onUpdateQuantity }) {" return (); <li className="flex items-center gap-4">" <img" src={item.image | "/placeholder.svg"}" alt={item.name}" className="w-16 h-16 object-cover rounded" / / />" <div className="flex-1">" <p className="font-medium">{item.name}</p>" <p className="text-sm text-muted-foreground">" ${item.price.toFixed(2)}" </p> </div> <input" type="number" min={1}" value={item.quantity} onChange={e = / /> onUpdateQuantity?.(item.id,parseInt(e.target.value | "1",10))" }" className="w-16 bg-transparent border border-input rounded p-1 text-center" />" <span className="w-20 text-right">" ${(item.price * item.quantity).toFixed(2)}" </span>" <Button variant="outline" size="sm" onClick={() => onRemove?.(item.id)}>" Remove" </Button> </li> )} ";"""
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
"export function CartItem({ item,onRemove,onUpdateQuantity }) {" return (); <li className="flex items-center gap-4">" <img" src={item.image | "/placeholder.svg"}" alt={item.name}" className="w-16 h-16 object-cover rounded" / / />" <div className="flex-1">" <p className="font-medium">{item.name}</p>" <p className="text-sm text-muted-foreground">" ${item.price.toFixed(2)}" </p> </div> <input" type="number" min={1}" value={item.quantity} onChange={e = / /> onUpdateQuantity?.(item.id,parseInt(e.target.value | "1",10))" }" className="w-16 bg-transparent border border-input rounded p-1 text-center" />" <span className="w-20 text-right">" ${(item.price * item.quantity).toFixed(2)}" </span>" <Button variant="outline" size="sm" onClick={() => onRemove?.(item.id)}>" Remove" </Button> </li> )} ";"""=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
