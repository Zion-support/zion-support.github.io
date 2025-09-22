import React from 'react';

import { Metadata } from 'next';

export const metadata: Metadata = { 

export default function BusinessAutomationPage() {

function AutomationServiceCard({ title, description, features, pricing, icon }: { 

function AutomationTech({ title, technologies }: { title: string; technologies: string[] }) {

function AutomationProcessStep({ step, title, description }: { step: string; title: string; description: string }) {

function Pricing() {

function AutomationPlan({ name, price, duration, features, popular }: { 

