import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {useProjects} from '@/hooks/
import {useMilestones} from '@/hooks/
import {useJobDetails} from '@/hooks/
import {useAuth} from '@/hooks/
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/
import {useDisputeCheck} from '@/hooks/
import {MilestoneActivities, MilestoneManager, MilestoneCreator, ProjectActions, ProjectHeader} from './