
import { useState } from "react"
import { BookOpen, Code, Copy, Terminal } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/
import { Alert, AlertDescription } from "@/components/ui/
import { Badge } from "@/components/ui/
import CodeBlock from "./
        
> <h4 className="text-md font-semibold mt-6 mb-2">Event Types</h4> <table className="w-full border-collapse mt-2"> <thead> <tr className="border-b border-zinc-800"> <th className="py-2 px-4 text-left">Event Type</th> <th className="py-2 px-4 text-left">Description</th> </tr> </thead> <tbody> <tr className="border-b border-zinc-800"> <td className="py-2 px-4 font-mono text-sm">new application</td> <td className="py-2 px-4">When a talent applies to one of your jobs</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4 font-mono text-sm">quote received</td> <td className="py-2 px-4">When you receive a quote from talent</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4 font-mono text-sm">milestone approved</td> <td className="py-2 px-4">When a project milestone is approved</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4 font-mono text-sm">talent hired</td> <td className="py-2 px-4">When you hire talent for a project</td> </tr> </tbody> </table> <h4 className="text-md font-semibold mt-6 mb-2">Sample Payloads