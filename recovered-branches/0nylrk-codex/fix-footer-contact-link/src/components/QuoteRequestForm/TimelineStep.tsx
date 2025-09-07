
import { useState } from "react";""
import { format } from "date-fns";""
import { Calendar } from "@/components/ui/calendar";""
import { Button } from "@/components/ui/button";""
import { Label } from "@/components/ui/label";""
import { CalendarIcon } from "@/components/icons";"

import {
  // TODO: Implement
}
  Popover,

  PopoverContent,
  PopoverTrigger,"
} from "@/components/ui/popover";""
import { cn } from "@/lib/utils";""
import { QuoteFormData } from "@/types/quotes";"
interface TimelineStepProps {
  // TODO: Implement
}
  formData: QuoteFormData;,
  updateFormData: (data: Partial<QuoteFormData>) => void;
</QuoteFormData>"
    <div className="space-y-6">"
</div>
      <div>
</div>"
        <h3 className="text-xl font-semibold text-white mb-4">"
</h3>
        </h3>
"
        <h3 className="text-xl font-semibold text-white mb-4">When do you need this?</h3>""
        <div className="space-y-4">"
</div>"
          <div className="flex items-center space-x-4">"
</div>
            <div;
              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${"
                formData.timeline === "fixed"""
                  ? "bg-zion-purple/20 border-zion-purple"""
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50""
              }`}"
              onClick={() => updateFormData({ timeline: "fixed" })}"
</div>"
              <h4 className="font-medium text-white">Fixed Dates</h4>""
              <p className="text-sm text-zion-slate-light">"
</p>
              </p>
            </div>

            <div;
              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${"
                formData.timeline === "flexible"""
                  ? "bg-zion-purple/20 border-zion-purple"""
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50""
              }`}"
              onClick={() => updateFormData({ timeline: "flexible" })}"
</div>"
              <h4 className="font-medium text-white">Flexible Timeline</h4>""
              <p className="text-sm text-zion-slate-light">"
</p>
              </p>
            </div>
          </div>"
            <div className="grid grid-cols-1 md: grid-cols-2 gap-4 mt-6">"
</div>"
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">"
</div>"
            <div className="grid grid-cols-1 md: grid-cols-2 gap-4 mt-6">"
</div>
              <div>
</div>"
                <Label className="block mb-2 text-zion-slate-light">"
</Label>
                </Label>
                <Popover>
</Popover>
                  <PopoverTrigger asChild>
</PopoverTrigger>
                    <Button;"
                      variant="outline""
                      className={cn("
                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark"""
                        !formData.startDate && "text-zion-slate-light"")
                      )}
                    >;
</Button>"
                      <CalendarIcon className="mr - 2 h - 4 w - 4" />;"
</CalendarIcon>
                        <span > Pick a date</span>)}
                    </Button>;
                  </PopoverTrigger>;
                  <PopoverContent;"
                    className="w - auto p - 0 bg - zion - blue - dark border border - zion - blue - light";""
                    align="start";"
                  >;
</PopoverContent>
                    <Calendar;"
                      mode="single";"
                      selected={form_data.start_date}
                      on_select={(date) => updateFormData ({ start_date: date })}
</Calendar>
                  </PopoverContent>;
                </Popover>;
              </div>;
              <div>;
</div>"
                <Label className="block mb - 2 text - zion - slate - light">;"
</Label>
                </Label>;
                <Popover>;
</Popover>
                  <PopoverTrigger as_child>;
</PopoverTrigger>
                    <Button;"
                      variant="outline";"
                      className={cn ("
                        "w - full justify - start text - left font - normal bg - zion - blue border border - zion - blue - light hover: bg - zion - blue - dark",""
                        !form_data.end_date && "text - zion - slate - light",")
                      )}
"
import {useState} from "react";""
import {format} from "date-fns";""
import {Calendar} from "@/components/ui/calendar";""
import {Button} from "@/components/ui/button";""
import {Label} from "@/components/ui/label";""
import {CalendarIcon} from "@/components/icons";""
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";""
import {cn} from "@/lib/utils";""
import {QuoteFormData} from "@/types/quotes";"
interface TimelineStepProps {;
  formData: QuoteFormData,;
  updateFormData: (data: Partial<QuoteFormData>) => void;
</Button>"
    <div className="space-y-6">;"
</div>
      <div>;
</div>"
        <h3 className="text-xl font-semibold text-white mb-4">When do you need this?</h3>;""
        <div className="space-y-4">;"
</div>"
          <div className="flex items-center space-x-4">;"
</div>
            <div;
              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${"
                formData && formData.timeline === "fixed"""
                  ? "bg-zion-purple/20 border-zion-purple"""
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50""
              }`}"
              onClick={() => updateFormData({ timeline: "fixed" })}"
</div>"
              <h4 className="font-medium text-white">Fixed Dates</h4>;""
              <p className="text-sm text-zion-slate-light">I have specific start and end dates</p>;"
            </div>;
            <div;
              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${"
                formData && formData.timeline === "flexible"""
                  ? "bg-zion-purple/20 border-zion-purple"""
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50""
              }`}"
              onClick={() => updateFormData({ timeline: "flexible" })}"
</div>"
              <h4 className="font-medium text-white">Flexible Timeline</h4>;""
              <p className="text-sm text-zion-slate-light">I'm flexible on the timing</p>;'
            </div>;
          </div>;'
            <div className="grid grid-cols-1 md: grid-cols-2 gap-4 mt-6">;"
</div>
              <div>;
</div>"
                <Label className="block mb-2 text-zion-slate-light">Start Date</Label>;"
                <Popover>;
</Popover>
                  <PopoverTrigger asChild>;
</PopoverTrigger>
                    <Button;"
                      variant="outline""
                      className={cn("
                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark",""
                        !formData.startDate && "text-zion-slate-light",")
                      )}
                    >
</Button>"
                      <CalendarIcon className="mr-2 h-4 w-4" />"
</CalendarIcon>
                        <span>Pick a date</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent;"
                    className="w-auto p-0 bg-zion-blue-dark border border-zion-blue-light"""
                    align="start""
                  >
</PopoverContent>
                    <Calendar;"
                      mode="single""
                      selected={formData && formData.startDate}
                      onSelect={(date) => updateFormData({ startDate: date })}
</Calendar>

                  </PopoverContent>
                </Popover>
              </div>


              <div>
</div>"
                <Label className="block mb-2 text-zion-slate-light">"
</Label>
                </Label>
                <Popover>
</Popover>
                  <PopoverTrigger asChild>
</PopoverTrigger>
                    <Button;"
                      variant="outline""
                      className={cn("
                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover: bg-zion-blue-dark",""
                        !formData.endDate && "text-zion-slate-light",")
                      )}
                    >
</Button>"
                      <CalendarIcon className="mr-2 h-4 w-4" />"
</CalendarIcon>
                        <span>Pick a date</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent;"
                    className="w-auto p-0 bg-zion-blue-dark border border-zion-blue-light"""
                    align="start""
                  >
</PopoverContent>
                    <Calendar;"
                      mode="single""
                      selected={formData.endDate}
                      onSelect={(date) => updateFormData({ endDate: date })}
</Calendar>
                        date < (formData.startDate || new Date())
                      }
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
        </div>
      </div>
    </div>"
    <div className="space-y-6">;"
</div>
      <div>;
</div>"
        <h3 className="text-xl font-semibold text-white mb-4">When do you need this?</h3>;""
        <div className="space-y-4">;"
</div>"
          <div className="flex items-center space-x-4">;"
</div>
            <div;
              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${;"
                formData.timeline === "fixed";""
                  ? "bg-zion-purple/20 border-zion-purple";""
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50";"
              }`}"
              onClick={() => updateFormData({ timeline: "fixed" })}"
</div>"
              <h4 className="font-medium text-white">Fixed Dates</h4>;""
              <p className="text-sm text-zion-slate-light">I have specific start and end dates</p>;"
            </div>;
            <div;
              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${;"
                formData.timeline === "flexible";""
                  ? "bg-zion-purple/20 border-zion-purple";""
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50";"
              }`}"
              onClick={() => updateFormData({ timeline: "flexible" })}"
</div>"
              <h4 className="font-medium text-white">Flexible Timeline</h4>;""
              <p className="text-sm text-zion-slate-light">I'm flexible on the timing</p>;'
            </div>;
          </div>;'
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">;"
</div>
              <div>;
</div>"
                <Label className="block mb-2 text-zion-slate-light">Start Date</Label>;"
                <Popover>;
</Popover>
                  <PopoverTrigger asChild>;
</PopoverTrigger>
                    <Button;"
                      variant="outline";"
                      className={cn(;"
                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark";"
                    <Button;"
                      variant="outline";"
                      className={cn(;"
                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark",;""
                        !formData.startDate && "text-zion-slate-light";")
                      )}
                    >;
</Button>"
                      <CalendarIcon className="mr-2 h-4 w-4" />;"
</CalendarIcon>"
                      {formData.startDate ? format(formData.startDate, "PPP") : <span>Pick a date</span>}""
                      {formData.startDate ? format(formData.startDate, "PPP") :<span>Pick a date</span>}"
                    </Button>;
                  </PopoverTrigger>;"
                  <PopoverContent className="w-auto p-0 bg-zion-blue-dark border border-zion-blue-light" align="start">;"
</PopoverContent>
                    <Calendar;"
                      mode="single";"
                      selected={formData.startDate}
                      onSelect={(date) => updateFormData({ startDate: date })}
</Calendar>
                  </PopoverContent>;
                </Popover>;
              </div>;
              <div>;
</div>"
                <Label className="block mb-2 text-zion-slate-light">End Date</Label>;"
                <Popover>;
</Popover>
                  <PopoverTrigger asChild>;
</PopoverTrigger>
                    <Calendar;"
                      mode="single""
                      selected={formData && formData.endDate}
                      onSelect={(date) => updateFormData({ endDate: date })}
</Calendar>
                      disabled={(date) => date < (formData && formData.startDate || new Date())}
                      disabled={(date) => date < (formData.startDate || new Date())}
                      disabled={(date) =>
                        date < (formData.startDate || new Date())
                      }
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
        </div>
      </div>
    </div>"
                      <CalendarIcon className="mr - 2 h - 4 w - 4" />;"
</CalendarIcon>
                        <span > Pick a date</span>)}
                    </Button>;
                  </PopoverTrigger>;
                  <PopoverContent;"
                    className="w - auto p - 0 bg - zion - blue - dark border border - zion - blue - light";""
                    align="start";"
                  >;
</PopoverContent>
                    <Calendar;"
                      mode="single";"
                      selected={form_data.end_date}
                      on_select={(date) => updateFormData ({ end_date: date })}
</Calendar>
                        date < (form_data.start_date || new Date ());
                      }

                    />;
                  </PopoverContent>;
                </Popover>;
              </div>;
        </div>;
      </div>;
    </div>;
            </div>)}
        </div>;
      </div>;
    </div>);
</div>
      </div>
    </div>
        </div>
      </div>
    </div>
        </div>;
      </div>;
    </div>;"

