
import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/
import { Button } from "@/components/ui/
import { Form } from "@/components/ui/
import { Card } from "@/components/ui/
import { RateOptimizationSection } from "../
import { basicInfoSchema, BasicInfoFormData } from "./
import { PersonalInfoFields } from "./
import { ContactFields } from "./
<div className=" pt-4 border-t border-gray-200"> <h3 className=" text-lg font-medium mb-4">Rate Information</h3> <RateOptimizationSection /> </div> 