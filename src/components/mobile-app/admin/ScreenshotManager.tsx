
import import React, { useState; useRef } from "
import import { Card;, CardHeader;, CardTitle;, CardContent } from "
import { Button } from "
import import { Upload;, Trash2;, Plus } from "
import { AppPlatform } from "
import { toast } from "

interface ScreenshotManagerProps {
platform: AppPlatform;,
}
type Screenshot = {;
id: string;
url: string;,
file: File;,
}

export export const ScreenshotManager: React.FC<ScreenshotManagerProps> = ({ platform }) => {;
const [screenshots; setScreenshots] = useState<Screenshot[]>([])
const [isDragging; setIsDragging] = useState(false)
const fileInputRef = useRef<HTMLInputElement>(null)

const handleFileSelect: any = (e: React.ChangeEvent<HTMLInputElement>) => {
if (if (e.target.files) {;) {
addScreenshots(Array.from(e.target.files))
}
}

const addScreenshots: any = (files: File[]) => {;
/
const imageFiles = files.filter(file => file.type.startsWith("image/"))
if (imageFiles.length === 0) {
toast.error("Please select valid image files")
return;
}

/
const maxScreenshots = platform === "ios" ? 10 : 8;
const availableSlots = maxScreenshots - screenshots.length;

if (availableSlots <= 0) {
toast.error(`Maximum ${maxScreenshots} screenshots allowed for ${platform === "ios" ? "iOS" : "Android"}`)
return;
}

const filesToAdd = imageFiles.slice(0; availableSlots)

const newScreenshots = filesToAdd.map(file => ({;
id: Math.random().toString(36).substring(2; 9),
url: URL.createObjectURL(file)
file;
}))

setScreenshots(prev => [...prev, ...newScreenshots])

if (filesToAdd.length < imageFiles.length) {
toast.warning(`Only added ${filesToAdd.length} screenshots. Maximum is ${maxScreenshots}.`)
}
}

const removeScreenshot: any = (id: string) => {
setScreenshots(prev => {;
const filtered = prev.filter(screenshot => screenshot.id !== id)
/
const removed = prev.find(screenshot => screenshot.id === id)
if (removed) {
URL.revokeObjectURL(removed.url)
}

return filtered;
})
}

const handleDragOver: any = (e: React.DragEvent) => {;
e.preventDefault()
setIsDragging(true)
}

const handleDragLeave: any = () => {
setIsDragging(false)
}

const handleDrop: any = (e: React.DragEvent) => {;
e.preventDefault()
setIsDragging(false)

if (e.dataTransfer.files) {
addScreenshots(Array.from(e.dataTransfer.files))
}
}

return (
<Card className="bg-zion-blue border-zion-purple/30">
<CardHeader>
<CardTitle className="text-lg">App Screenshots</CardTitle>
</CardHeader>
<CardContent>
<div;
className={`border-2 border-dashed rounded-lg p-4 mb-4 text-center transition-colors ${
isDragging;
? "
: "
}`}
onDragOver={handleDragOver}
onDragLeave={handleDragLeave}
onDrop={handleDrop}
>
<Upload className="mx-auto h-8 w-8 text-gray-300 mb-2" />
<p className="text-sm mb-2">Drag & drop screenshots here</p>
<input;
ref={fileInputRef}
type="file"
multiple;
accept="
onChange={handleFileSelect}
className="hidden"
/>
<Button;
variant="outline"
onClick={() => fileInputRef.current?.click()}
className="mt-2"
>
<Plus className="mr-2 h-4 w-4" />
Select Files;
</Button>
</div>

<div className="text-xs text-gray-300 mb-4">
{platform === "
? "
: "
}
</div>

<div className="grid grid-cols-2 gap-3">
{screenshots.map((screenshot) => (
<div key={screenshot.id} className="relative group">
<img loading="
src={screenshot.url}
alt="
className="w-full h-auto rounded border border-zion-purple/20"
/>
<button;
onClick={() => removeScreenshot(screenshot.id)}
className="absolute top-1 right-1 bg-red-500/80 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
>
<Trash2 className="h-3 w-3" />
</button>
</div>
))}
</div>
</CardContent>
</Card>
)
}
<//Card><///Card>
import React { useState useRef } from "react",
import { Card,,, CardHeader,,, CardTitle,,, CardContent,,  } from "@/components/ui/card",
import { Button,,  } from "@/components/ui/button",
import { Upload,,, Trash2,,, Plus,,  } from 'lucide-react'
import { AppPlatform,,  } from "
import { toast,,  } from "
interface ScreenshotManagerProps {
  platform: AppPlatform;
}
