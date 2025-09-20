import { useState } from "react";
import { BookOpen, Terminal } from "lucide-react";
              {Object.keys(codeExamples).map(lang => (                <button
                  onClick = {() => setActiveTab(lang)}