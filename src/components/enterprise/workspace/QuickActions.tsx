import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,;
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Plus, Search, Calendar } from 'lucide-react';
export function QuickActions() {
  const actions = [
    {

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function QuickActions() {
  const actions = [
    {

              className={`h-auto justify-start p-4 ${action.color}`}
            >
              <div className='flex flex-col items-start text-left'>
                <div className='flex items-center'>
                  {action.icon}
                  <span>{action.label}</span>
                </div>
                <span className='mt-1 text-xs text-muted-foreground'>
                  {action.description}
                </span>              </div>

              </div>

            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}