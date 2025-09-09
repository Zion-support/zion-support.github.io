import React from "react";
import { format } from "date-fns";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {

import {;
  Popover,;
  PopoverContent,;
  PopoverTrigger,;

  Popover,
  PopoverContent,
  PopoverTrigger,;

} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

import { FormControl } from "@/components/ui/form";
import { cn } from "@/lib/utils";interface DateFieldsProps {
  startDate: Date | undefined,
  setStartDate: (date: Date | undefined) => void,
  endDate: Date | undefined,
  setEndDate: (date: Date | undefined) => void
}  return (

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>"
        <Label htmlFor="publishedDate">Published Date (Optional)</Label>
        <Popover>
          <PopoverTrigger asChild>
            <FormControl>
              <Button"
                variant={"outline"}
                className={cn(                )}
              >
                {startDate ? (
                  format(startDate, "PPP")
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={startDate}
              onSelect={setStartDate}import React from 'react',;
import { format } from 'date-fns',;
import { Label } from "@/components/ui/label",;
import { Button } from "@/components/ui/button",;
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",;
import { Calendar } from "@/components/ui/calendar",;
import { FormControl } from "@/components/ui/form",;
import { cn } from "@/lib/utils",;
              selected={startDate}
              onSelect={setStartDate}
interface DateFieldsProps {;
  startDate: Date | undefined;
  setStartDate: (date: Date | undefined) => void;
  endDate: Date | undefined;
  setEndDate: (date: Date | undefined) => void;
}
;
export function DateFields({ startDate, setStartDate, endDate, setEndDate }: DateFieldsProps) {;
  return (;
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
      <div>;"
        <Label htmlFor="publishedDate">Published Date (Optional)</Label>;
        <Popover>;
          <PopoverTrigger asChild>;
            <FormControl>;
              <Button
                variant={"outline"}
                className={cn(
                  "w-full md: w-[240px] pl-3 text-left font-normal",
                  !startDate && "text-muted-foreground",
                )}>;                {startDate ? (;
                  format(startDate, "PPP");
                ) : (;
                  <span>Pick a date</span>;
                )}              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <div>"
        <Label htmlFor="expiryDate">Expiry Date (Optional)</Label>
        <Popover>
          <PopoverTrigger asChild>
            <FormControl>
              <Button"
                variant={"outline"}
                className={cn(                  !endDate && "text-muted-foreground"
                )}
              >
                {endDate ? ("


