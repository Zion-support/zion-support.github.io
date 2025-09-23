
import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { WorkExperience } from "@/types/resume";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
